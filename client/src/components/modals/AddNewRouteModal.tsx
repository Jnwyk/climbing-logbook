import type React from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal from './Modal';
import SearchInput from '../SearchInput';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import type { CreateRouteInreface } from '../../interfaces/CreateRouteInterface';
import { createRoute } from '../../api/routes';
import { DynamicInput } from '../DynamicInput';
import { crags } from '../../api/crags';
import { areas } from '../../api/areas';
import type CragsInterface from '../../interfaces/CragsInterface';
import type AreaInterface from '../../interfaces/AreaInterface';

interface AddNewRouteModalProps {
  modalRef: React.Ref<HTMLDialogElement>;
  closeModal: () => void;
}

const defaultNewRoute = {
  name: '',
  cragName: '',
  areaName: '',
  grade: '',
  climbingStyle: '',
  country: '',
};

export function AddNewRouteModal({
  modalRef,
  closeModal,
}: AddNewRouteModalProps) {
  const [newRoute, setNewRoute] =
    useState<CreateRouteInreface>(defaultNewRoute);

  const { data: cragData } = useQuery({
    queryKey: ['crags'],
    queryFn: crags,
  });

  const { data: areaData } = useQuery({
    queryKey: ['areas'],
    queryFn: areas,
  });

  const mutation = useMutation({
    mutationFn: () => createRoute(newRoute),
  });

  const changeAreaNameInput = (value: string) => {
    const foundArea = areaData.find(
      (element: AreaInterface) => element.name === value,
    );
    setNewRoute((prev) => ({
      ...prev,
      area: value,
      country: foundArea.country,
    }));
  };

  const changeRouteInput = (key: string, value: string) => {
    if (key === 'area') changeAreaNameInput(value);
    else setNewRoute((prev) => ({ ...prev, [key]: value }));
  };

  const submitForm = () => {
    mutation.mutate();
    setNewRoute(defaultNewRoute);
    closeModal();
  };

  const closeForm = () => {
    setNewRoute(defaultNewRoute);
    closeModal();
  };

  return (
    <Modal modalRef={modalRef} onClose={closeForm}>
      <div className="grid grid-cols-2 gap-4">
        <SearchInput
          label="Route name"
          placeholder="e.g. Lewy Meningitis"
          value={newRoute.name}
          className="col-span-2"
          onChange={(value) => changeRouteInput('name', value)}
        />
        <DynamicInput
          label="Crag name"
          placeholder="Dupa Słonia"
          data={cragData?.crags.map((crag: CragsInterface) => crag.name)}
          value={newRoute.cragName}
          onChange={(value) => changeRouteInput('cragName', value)}
        />
        <DynamicInput
          label="Area Name"
          placeholder="Rudawy Janowickie"
          data={areaData?.areas.map((area: AreaInterface) => area.name)}
          value={newRoute.areaName}
          onChange={(value) => changeRouteInput('areaName', value)}
        />
        <SearchInput
          label="Grade"
          placeholder="7a / VI.3"
          value={newRoute.grade}
          onChange={(value) => changeRouteInput('grade', value)}
        />
        <SearchInput
          label="Type"
          placeholder="Sport"
          value={newRoute.climbingStyle}
          onChange={(value) => changeRouteInput('climbingStyle', value)}
        />
      </div>
      <div className="flex mt-4">
        <SecondaryButton className="flex-1 py-3" onClick={closeForm}>
          Cancel
        </SecondaryButton>
        <PrimaryButton
          className="flex-2 py-3"
          onClick={submitForm}
          disabled={
            Object.values(newRoute).find((value) => value == '') === ''
              ? true
              : false
          }
        >
          Submit
        </PrimaryButton>
      </div>
    </Modal>
  );
}
