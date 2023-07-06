import React from 'react'
import { Grid, Box } from '@mui/material'
import styles from './stylesheet/styles.module.css'
import { useSelector } from "react-redux";
import ResuableEditBox from '../Reusable_Component/innerCard.jsx';

const LayoutFour = () => {

    
    const {  adjust_border_size, adjust_border_color,dragged_img_collection } = useSelector(s => s);

    let EditImage = []

    dragged_img_collection.map((item) => {
        EditImage.push(item)
    })



    return (
        <Box component="div" className={`${styles.TwoTopTwoBottom}  ${styles.custom_images_fit}`} style={{border: `${adjust_border_size}px solid ${adjust_border_color}`}}>
            <Grid container>
                <Grid item lg={6} md={6} xs={6}>
                 
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Right_Bottom}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={0}
                        PreviousImage={EditImage[0]}
                    />
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Left_Bottom}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={1}
                        PreviousImage={EditImage[1]}
                    />
                 
                </Grid>
                <Grid item lg={6} md={6} xs={6}>
                   
                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Right_Top}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={2}
                        PreviousImage={EditImage[2]}
                    />

                </Grid>
                <Grid item lg={6} md={6} xs={6}>

                    <ResuableEditBox
                        editDeleteBtn={styles.editDeleteBtn}
                        Four_Border={styles.Border_Left_Top}
                        hoverEffectBtn={styles.hoverEffectBtn}
                        index={3}
                        PreviousImage={EditImage[3]}
                    />
                   
                </Grid>
            </Grid>
        </Box>
    )
}


export default LayoutFour