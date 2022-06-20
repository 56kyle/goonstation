
import { useBackend, useSharedState } from '../../backend';
import { Input, LabeledList, Section, Stack, Table } from '../../components';
import { Window } from '../../layouts';
import { BookmarkData } from './type';


export const Bookmark = (props, context) => {
  const { act, data } = useBackend<BookmarkData>(context);

  return (
    <LabeledList.Item label={data.label}>
      <p>Bookmark Paragraph</p>

    </LabeledList.Item>
  );
};



