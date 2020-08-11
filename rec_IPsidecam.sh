#!/bin/bash

cd ./videos/sidecam/

pmam=$(date +%p)
H=$(date +%H)


if [[ $H < 18 ]] && [[ $H < 6 ]];then
    
    for i in $(seq 1 5)
    do 
    d=$(date +%d-%b-%Y)
    mkdir $d

    ffmpeg -t 0:0:10 -i   http://10.0.0.20:8080/video  $d/$(date +"%d-%b-%Y-%I-%M-%S-%p")'.mp4'

    done
else
    echo "error ... video not recording !@#!$"

fi