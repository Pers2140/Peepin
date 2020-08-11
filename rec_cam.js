const { exec }= require('child_process')

exports.rec_ip =function rec_ip(name,ipport,durpervid,inter){
    var count = 0
    setInterval(()=>{
   
        let full_date = new Date().toString().substring(0,23)
        let DMY = full_date.toString().substring(0,15).replace(/ /gi,'_')
        let rec_cmd = `ffmpeg -t ${durpervid} -i   http://${ipport}/video './${name}_${DMY}/${full_date}#${count}.mp4'`
        let create_fol = `mkdir ${name}_${DMY}`
        
        
        
        exec(create_fol,(error, stdout, stderr)=>{
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            console.log(`${DMY} folder create ...`)
        })
        exec(rec_cmd,(error, stdout, stderr)=>{
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            console.log('video recording ...')
        })
        count++
    },inter)    
    
}