import React,{useEffect,useState} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'

import { exerciseOptions,fetchData } from '../utils/fetchData'

import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises,setExercises,bodyPart}) => {

  const [currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=9;

  const indexOfLastExercise=currentPage*exercisesPerPage;
  const indexOfFirstExercise=indexOfLastExercise-exercisesPerPage;
  const currentExercises=exercises.slice(indexOfFirstExercise,indexOfLastExercise)
  
const paginate=(e,value)=>{
setCurrentPage(value);

window.scrollTo({
  // for large screens scroll to 900px and for small screens scroll to 500px
  top:window.innerWidth>600?1600:500,
  behavior:'smooth'
})
}

useEffect(()=>{
  const fetchExercisesData=async()=>{
    let exerciseData=[];
    if(bodyPart==='all'){
      exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100000',exerciseOptions);
}
  else{
    exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=100000`,exerciseOptions);
  }
  setExercises(exerciseData);
}
fetchExercisesData();
},[bodyPart]);
  
  console.log(exercises)
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb="46px">  

      Showing Results
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap='wrap' justifyContent='center'
      >
        {currentExercises.map((exercise,index)=>(
          <ExerciseCard key={index} exercise={exercise}/>
        ))}

      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length>9&&(
          <Pagination color="standard" shape="rounded"
          defaultPage={1}
          count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises
