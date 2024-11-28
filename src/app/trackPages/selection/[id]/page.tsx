'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import Select from '@/components/Select/Select';
import { useAppDispatch } from '@/store/store';
import { addSelectionTracks } from '@/store/features/trackSlice';
// import {getSelectionTracks} from "@/api/selectionApi";

type IdType = {
  id: string;
};

// export async function generateStaticParams() {
//   const tracks = await getSelectionTracks('1')
//
//   return tracks.items.map((track) => ({
//     id: track._id,
//   }))
// }

function Selection() {
  const dispatch = useAppDispatch();
  const { id } = useParams<IdType>();

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(addSelectionTracks(id)).unwrap();
      } catch (error) {
        console.warn(error);
      }
    };
    getData();
  }, []);

  return <Select />;
}
export default Selection;
