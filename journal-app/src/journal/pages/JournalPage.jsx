import { Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, vel laudantium sapiente tempore quae modi id ad repellendus sunt tempora, praesentium nam quaerat consequatur. Voluptatum id aperiam officiis provident magnam.</Typography> */}
      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
