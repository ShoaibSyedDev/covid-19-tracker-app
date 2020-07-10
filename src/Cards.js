import React from 'react'
import  {Card , CardContent, Typography,Grid, StylesProvider} from '@material-ui/core';
import CountUp from 'react-countup'
import  "./cards.css"

  const Cards = ({data:{ confirmed ,recovered,deaths,lastUpdate}}) =>{
    if(!confirmed){
      return "loading....";
    }
  
       
    return (
        <div className='container'>
        
        <Grid container spacing={3}   justify="center">
        <Grid item component={Card} xs={12} md={3}  className='infected' >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
               Active Cases
              </Typography>
              <Typography varaint="h5">
              <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.5}
                  separator=","
               />
            
              </Typography>
    <Typography colr="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography varaint="body2">Number Of active Real cases Of COVID-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3}  className='recovered' >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Recovered</Typography>
              <Typography varaint="h5"> <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
               /></Typography>
              <Typography colr="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography varaint="body2">Number Of Reovered from COVID-19</Typography>
            </CardContent>
          </Grid>

          <Grid item component={Card} xs={12} md={3}  className='deaths' >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Deaths</Typography>
              <Typography varaint="h5"> <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
               /></Typography>
              <Typography colr="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography varaint="body2">Number Of Deaths from COVID-19</Typography>
            </CardContent>
          </Grid>

        </Grid>
            
        </div>
    )
}
export default  Cards;
