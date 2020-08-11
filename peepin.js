const express = require('express')
const http = require('http')
const app = express()
const rec_cam = require('./rec_cam')
const fs = require('fs')



app.listen(80)
app.set('view engine', 'ejs')
app.use(express.static('.'))
app.get('/', (req, res) => {
        res.render('frontcam',{fols:sidecam_recs()})
    })
app.get('/sidecam', (req, res) => {
        res.render('sidecam',{fols:sidecam_recs()})
    })
app.get('/frontcam', (req, res) => {
        res.render('frontcam',{fols:frontcam_recs()})
    })


// getting files from frontcam folder
function frontcam_recs(){
    //dir location
    const date_fols = fs.readdirSync('./videos/frontcam/') // returns arr
    var fols_rec = {}
    date_fols.forEach(fol=>{
        fols_rec[fol] = fs.readdirSync('./videos/frontcam/'+fol)
    })
    
    return fols_rec
}
// getting files from sidecam folder
function sidecam_recs(){
    //dir location
    const date_fols = fs.readdirSync('./videos/sidecam/') // returns arr
    var fols_rec = {}
    date_fols.forEach(fol=>{
        fols_rec[fol] = fs.readdirSync('./videos/sidecam/'+fol)
    })
    
    return fols_rec
}





