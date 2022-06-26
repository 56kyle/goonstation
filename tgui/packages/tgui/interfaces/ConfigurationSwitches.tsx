


import { useBackend, useSharedState } from '../backend';
import { Box, Button, Flex, Input, LabeledList, Section, Slider, Stack, Table } from '../components';
import { Window } from '../layouts';



interface ConfigurationSwitchesProps {
  net_number: number,

}

export const ConfigurationSwitches = (props, context) => {
  const { act, data } = useBackend(context);
  const {
    net_number,
  } = props;

  const switches = () => {
    let switchElements: JSX.Element[] = [];
    for (let i = 8; i >= 1; i >>= 1) {
      switchElements.push(
        <Box backgroundColor={net_number & i ? "#60B54A" : "#CD1818"}
          color={net_number & i ? "#60B54A" : "#CD1818"}
          onClick={() => { act("onConfigSwitch", { dipsw: i }); }}
        />
      );
    }
  };


  return (
    <>
      <Box>
        Configuration Switches
      </Box>
      <Flex direction="row">
        {switches()}
      </Flex>
    </>
  );
};

