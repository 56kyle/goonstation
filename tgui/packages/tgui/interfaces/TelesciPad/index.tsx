
import { useBackend, useSharedState } from '../../backend';
import { Input, LabeledList, Section, Stack, Table } from '../../components';
import { Window } from '../../layouts';
import { TelesciPadData } from './type';


export const TelesciPad = (props, context) => {
  const { act, data } = useBackend<TelesciPadData>(context);

  return (
    <Window title="Telesci Pad"
      width={700}
      height={700}
      theme="retro-dark">
      <Window.Content>
        <p>Telesci Pad Paragraph</p>
      </Window.Content>
    </Window>
  );
};

