
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
