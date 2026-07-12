import { useState } from 'react';
import { useMutation, useQueries } from '@tanstack/react-query';
import { getGrades, getFormats, getStyles } from '../../api/dictionaries';
import Modal from './Modal';
import { DynamicInput } from '../inputs/DynamicInput';
import StyleButton from '../StyleButton';
import TextArea from '../inputs/TextArea';
import CheckboxInput from '../inputs/CheckboxInput';
import StarRateInput from '../inputs/StarRateInput';
import { route } from '../../api/routes';
import PrimaryButton from '../PrimaryButton';
import { createAscent } from '../../api/ascents';
import type { CreateAscentInterface } from '../../interfaces/AscentsInterface';

interface AddAscentModalProps {
  modalRef: React.Ref<HTMLDialogElement>;
  onClose: () => void;
}

const defaultNewAscent = {
  route: '',
  private: false,
  format: '',
  grade: '',
  style: 'Redpoint',
  rate: 1,
  note: '',
};

export default function AddAscentModal({
  modalRef,
  onClose,
}: AddAscentModalProps) {
  const dictionaryData = useQueries({
    queries: [
      {
        queryKey: ['grades'],
        queryFn: () => getGrades(),
      },
      {
        queryKey: ['formats'],
        queryFn: () => getFormats(),
      },
      {
        queryKey: ['styles'],
        queryFn: () => getStyles(),
      },
      {
        queryKey: ['routes'],
        queryFn: () => route(),
      },
    ],
  });
  const mutation = useMutation({
    mutationKey: ['ascent'],
    mutationFn: (data: CreateAscentInterface) => createAscent(data),
  });
  const [newAscent, setNewAscent] = useState(defaultNewAscent);

  if (
    dictionaryData[0].isLoading ||
    dictionaryData[1].isLoading ||
    dictionaryData[2].isLoading ||
    dictionaryData[3].isLoading
  ) {
    return <div>loading</div>;
  }

  const handleChangeRoute = (value: string) => {
    const [routeName, cragName, areaName] = value.split(',');
    const foundRoute = dictionaryData[3].data.routes.find(
      (route: any) =>
        route.name === routeName.trim() &&
        route.cragName === cragName.trim() &&
        route.areaName === areaName.trim(),
    );
    setNewAscent((prev) => ({
      ...prev,
      route: value,
    }));
    if (foundRoute)
      setNewAscent((prev) => ({
        ...prev,
        grade: foundRoute.grade.grade,
      }));
  };

  const handleCloseModal = () => {
    setNewAscent(defaultNewAscent);
    onClose();
  };

  const handleSubmit = () => {
    const [routeName, cragName, areaName] = newAscent.route.split(',');
    const foundRoute = dictionaryData[3].data.routes.find(
      (route: any) =>
        route.name === routeName.trim() &&
        route.cragName === cragName.trim() &&
        route.areaName === areaName.trim(),
    );
    const foundFormat = dictionaryData[1].data.formats.find(
      (format: any) => newAscent.format === format.format,
    );
    const foundStyle = dictionaryData[2].data.styles.find(
      (style: any) => newAscent.style === style.style,
    );
    const foundGrade = dictionaryData[0].data.grades.find(
      (grade: any) => newAscent.grade === grade.grade,
    );
    const mutationObject: CreateAscentInterface = {
      userId: '65a01fc2-49eb-47aa-9e53-36db0cc1646e',
      routeId: foundRoute.id,
      ascentDate: new Date().toISOString(),
      formatId: foundFormat.id,
      styleId: foundStyle.id,
      myGradeId: foundGrade.id,
      stars: newAscent.rate,
      visibility: newAscent.private ? 'PUBLIC' : 'PRIVATE',
      personalOpinion: newAscent.note,
    };
    mutation.mutate(mutationObject);
    handleCloseModal();
  };

  return (
    <Modal modalRef={modalRef} onClose={() => handleCloseModal()}>
      <div className="grid grid-cols-2 gap-4">
        <DynamicInput
          label="Route"
          placeholder="input route..."
          data={dictionaryData[3].data.routes.map((route: any) => {
            return route.name + ', ' + route.cragName + ', ' + route.areaName;
          })}
          value={newAscent.route}
          onChange={(value) => handleChangeRoute(value)}
        />
      </div>
      <div className="flex gap-2">
        {dictionaryData[2].data.styles.map((style: any) => {
          return (
            <StyleButton
              key={style.id}
              style={style.style}
              selected={newAscent.style}
              onClick={(style) =>
                setNewAscent((prev) => ({ ...prev, style: style }))
              }
            />
          );
        })}
      </div>
      <DynamicInput
        label="Format"
        placeholder="format"
        value={newAscent.format}
        data={dictionaryData[1].data.formats.map(
          (format: any) => format.format,
        )}
        onChange={(value) =>
          setNewAscent((prev) => ({ ...prev, format: value }))
        }
      />
      <DynamicInput
        label="Grade"
        placeholder="grade"
        value={newAscent.grade}
        data={dictionaryData[0].data.grades.map((grade: any) => grade.grade)}
        onChange={(value) =>
          setNewAscent((prev) => ({ ...prev, grade: value }))
        }
      />
      <CheckboxInput
        label="Private"
        onChange={() =>
          setNewAscent((prev) => ({ ...prev, private: !prev.private }))
        }
      />
      <StarRateInput
        rate={newAscent.rate}
        handleChange={(value) =>
          setNewAscent((prev) => ({ ...prev, rate: value }))
        }
      />
      <TextArea
        label="notes"
        note={newAscent.note}
        onChange={(value) => setNewAscent((prev) => ({ ...prev, note: value }))}
      />
      <PrimaryButton
        disabled={
          !newAscent.route &&
          !newAscent.format &&
          !newAscent.grade &&
          !newAscent.style
        }
        onClick={() => handleSubmit()}
      >
        Submit
      </PrimaryButton>
    </Modal>
  );
}
