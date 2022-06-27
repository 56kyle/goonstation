
import { useBackend, useSharedState } from '../../backend';
import { Box, Button, Flex, Input, Knob, LabeledList, NumberInput, TextArea, Section, Slider, Stack, Table } from '../../components';
import { Window } from '../../layouts';

import { Bookmark } from './Bookmark';
import { TelesciConsoleData } from './type';

export const TelesciConsole = (props, context) => {
  const { act, data } = useBackend<TelesciConsoleData>(context);
  const {
    xtarget,
    ytarget,
    ztarget,
    host_id,
    panel_open,
    allow_scan,
    allow_bookmarks,
    bookmarks,
    xMin,
    yMin,
    zMin,
    xMax,
    yMax,
    zMax,
  } = data;

  const accessPanel = () => {
    return (
      <Section title="Access Panel">
        <p>foo</p>
      </Section>
    );
  };

  const decX = (amount: number) => <Button content="-" onClick={() => act("decreaseX", { x: amount })} compact />;
  const decY = (amount: number) => <Button content="-" onClick={() => act("decreaseY", { y: amount })} compact />;
  const decZ = (amount: number) => <Button content="-" onClick={() => act("decreaseZ", { z: amount })} compact />;
  const incX = (amount: number) => <Button content="+" onClick={() => act("increaseX", { x: amount })} compact />;
  const incY = (amount: number) => <Button content="+" onClick={() => act("increaseY", { y: amount })} compact />;
  const incZ = (amount: number) => <Button content="+" onClick={() => act("increaseZ", { z: amount })} compact />;

  const sendButton = () => <Button title="Send" content="Send" icon="arrow-right" onClick={() => act('send')} />;
  const recieveButton = () => <Button title="Recieve" content="Recieve" icon="arrow-left" onClick={() => act('recieve')} />;
  const toggleButton = () => <Button title="Toggle Portal" content="Toggle Portal" icon="fa-power-off" onClick={() => act('toggle_portal')} />;


  return (
    <Window title="Teleport Console"
      width={400}>
      <Window.Content>
        <Section title="Controls">
          <LabeledList>
            <LabeledList.Item label="X"
              buttons={<Flex justify="left">{sendButton()}</Flex>}
            >
              <NumberInput title="X"
                value={xtarget}
                minValue={xMin}
                maxValue={xMax}
                onChange={(e, value) => act("setX", { "x": value })}
                align="center"
              />
            </LabeledList.Item>
            <LabeledList.Item label="Y"
              buttons={<Flex justify="left">{recieveButton()}</Flex>}
            >
              <NumberInput title="Y"
                value={ytarget}
                minValue={yMin}
                maxValue={yMax}
                onChange={(e, value: number) => act("setY", { "y": value })}
              />
            </LabeledList.Item>
            <LabeledList.Item label="Z"
              buttons={<Flex justify="left">{toggleButton()}</Flex>}
            >
              <NumberInput title="Z"
                value={ztarget}
                minValue={zMin}
                maxValue={zMax}
                onChange={(e, value: number) => act("setZ", { "z": value })}
              />
            </LabeledList.Item>
          </LabeledList>
        </Section>
        <Section title="Bookmarks">
          {allow_bookmarks ? bookmarks.map((bookmark, index) => (
            <Bookmark key={index}
              index={index}
              {...bookmark}
            />
          )) : null}
        </Section>
        {panel_open ? accessPanel() : null}
      </Window.Content>
    </Window>
  );
};
