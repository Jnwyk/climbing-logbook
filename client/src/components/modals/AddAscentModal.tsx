import { useContext, useState } from 'react';
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
import type {
  FormatInterface,
  GradeInterface,
  StyleInterface,
} from '../../interfaces/DictionaryInterface';
import { AuthContext } from '../../context/AuthProvider';
import DateInput from '../inputs/DateInput';
import formatDateForInput from '../../utils/formatDateForInput';
import CommonLabel from '../inputs/CommonLabel';

interface AddAscentModalProps {
  modalRef: React.Ref<HTMLDialogElement>;
  onClose: () => void;
}

const getDefaultNewAscent = () => ({
  route: '',
  private: false,
  format: '',
  grade: '',
  style: 'Redpoint',
  rate: 1,
  note: '',
  ascentDate: formatDateForInput(new Date()),
});

export default function AddAscentModal({
  modalRef,
  onClose,
}: AddAscentModalProps) {
  const { user: user } = useContext(AuthContext);
  const [gradesData, formatsData, stylesData, routesData] = useQueries({
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
  const [newAscent, setNewAscent] = useState(getDefaultNewAscent);

  if (
    gradesData.isLoading ||
    formatsData.isLoading ||
    stylesData.isLoading ||
    routesData.isLoading
  ) {
    return <div>loading</div>;
  }

  const handleChangeRoute = (value: string) => {
    const [routeName, cragName, areaName] = value.split(',');
    const foundRoute = routesData.data.routes.find(
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
    setNewAscent(getDefaultNewAscent());
    onClose();
  };

  const handleSubmit = () => {
    if (user?.id === null || user?.id === undefined) return;
    const [routeName, cragName, areaName] = newAscent.route.split(',');
    const foundRoute = routesData.data.routes.find(
      (route: any) =>
        route.name === routeName.trim() &&
        route.cragName === cragName.trim() &&
        route.areaName === areaName.trim(),
    );
    const foundFormat = formatsData.data.formats.find(
      (format: FormatInterface) => newAscent.format === format.format,
    );
    const foundStyle = stylesData.data.styles.find(
      (style: StyleInterface) => newAscent.style === style.style,
    );
    const foundGrade = gradesData.data.grades.find(
      (grade: GradeInterface) => newAscent.grade === grade.grade,
    );
    const mutationObject: CreateAscentInterface = {
      userId: user.id,
      routeId: foundRoute.id,
      ascentDate: new Date(`${newAscent.ascentDate}T00:00:00`).toISOString(),
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
    <Modal
      className="w-[min(90vw,32rem)]"
      modalRef={modalRef}
      onClose={() => handleCloseModal()}
    >
      <div className="grid gap-2">
        <DynamicInput
          label="Route"
          placeholder="input route..."
          data={routesData.data.routes.map((route: any) => {
            return route.name + ', ' + route.cragName + ', ' + route.areaName;
          })}
          value={newAscent.route}
          onChange={(value) => handleChangeRoute(value)}
        />
        <div className="w-full gap-2">
          <CommonLabel label="Style" />
          <div className="flex w-full gap-2">
            {stylesData.data.styles.map((style: StyleInterface) => {
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
        </div>
        <div className="grid grid-cols-2 gap-2">
          <DynamicInput
            label="Format"
            placeholder="format"
            value={newAscent.format}
            data={formatsData.data.formats.map(
              (format: FormatInterface) => format.format,
            )}
            onChange={(value) =>
              setNewAscent((prev) => ({ ...prev, format: value }))
            }
          />
          <DynamicInput
            label="Grade"
            placeholder="grade"
            value={newAscent.grade}
            data={gradesData.data.grades.map(
              (grade: GradeInterface) => grade.grade,
            )}
            onChange={(value) =>
              setNewAscent((prev) => ({ ...prev, grade: value }))
            }
          />
        </div>
        <div className="grid grid-cols-2 items-end gap-2">
          <DateInput
            label="Ascent Date"
            date={newAscent.ascentDate}
            onChange={(date) =>
              setNewAscent((prev) => ({ ...prev, ascentDate: date }))
            }
          />
          <CheckboxInput
            label="Set as private"
            onChange={() =>
              setNewAscent((prev) => ({ ...prev, private: !prev.private }))
            }
          />
        </div>
        <div>
          <CommonLabel label="Rate" />
          <StarRateInput
            rate={newAscent.rate}
            handleChange={(value) =>
              setNewAscent((prev) => ({ ...prev, rate: value }))
            }
          />
        </div>

        <TextArea
          label="notes"
          note={newAscent.note}
          onChange={(value) =>
            setNewAscent((prev) => ({ ...prev, note: value }))
          }
        />
        <div className="flex justify-end">
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
        </div>
      </div>
    </Modal>
  );
}
