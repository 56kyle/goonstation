
import { useBackend, useSharedState } from '../../backend';
import { Input, LabeledList, Section, Stack, Table } from '../../components';
import { Window } from '../../layouts';
import { TelesciConsoleData } from './type';



export const TelesciConsole = (props, context) => {
  const { act, data } = useBackend<TelesciConsoleData>(context);
  const {
    host_id,
    panel_open,
    allow_scan,
    allow_bookmarks,
    bookmarks,
  } = data;


  const decreaseX = (dx: number) => act('decreaseX', { dx });
  const decreaseY = (dy: number) => act('decreaseY', { dy });
  const decreaseZ = (dz: number) => act('decreaseZ', { dz });

  const increaseX = (dx: number) => act('increaseX', { dx });
  const increaseY = (dy: number) => act('increaseY', { dy });
  const increaseZ = (dz: number) => act('increaseZ', { dz });

  const setX = (x: number) => act('setX', { x });
  const setY = (y: number) => act('setY', { y });
  const setZ = (z: number) => act('setZ', { z });

  return (
    <Window title="Teleport Console"
      width={700}
      height={700}>
      <Window.Content>
        <p>Teleport Console Paragraph</p>
      </Window.Content>
    </Window>
  );
};
