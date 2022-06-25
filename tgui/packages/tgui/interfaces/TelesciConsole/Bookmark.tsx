
import { useBackend, useSharedState } from '../../backend';
import { Box, Button, Flex, Input, LabeledList, Section, Stack, Table } from '../../components';
import { Window } from '../../layouts';
import { BookmarkProps, TelesciConsoleData } from './type';


export const Bookmark = (props, context) => {
  const { act, data } = useBackend<TelesciConsoleData>(context);
  const {
    index,
    title,
    x,
    y,
    z,
  } = props;
  const {
    xtarget,
    ytarget,
    ztarget,
  } = data;


  const editBookmark = (e) => {
    act('editBookmark', { index, title, x, y, z });
  };

  const restoreBookmark = (e) => {
    act('restoreBookmark', { index });
  };


  return (
    <LabeledList.Item label={title}>
      <Flex direction="row">
        <Box>{`(${x}, ${y}, ${z})`}</Box>
        <Button icon="fa-solid fa-arrow-up-from-bracket" content="Load" onClick={restoreBookmark} />
        <Button icon="floppy-disk" content="Save" onClick={() => act('save', { bookmark: data })} />
        <Button icon="trash" content="Delete" onClick={() => act('delete', { bookmark: data })} />
      </Flex>
    </LabeledList.Item>
  );
};



