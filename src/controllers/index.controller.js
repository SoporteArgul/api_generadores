const { request } = require('express');
const {Pool}=require('pg')


//conexion a PostgresSQL
const pool=new Pool({
    host:'172.18.0.165',
    port:'6002',
    user:'postgres',
    password:'Argul1266',
    database:'json_2'
    
})

//mostrar los datos
const getgenerador_1= async(req,res)=>{
   const response= await pool.query('SELECT * FROM generador1')
   console.log(response.rows);
   res.status(200).json(response.rows);
}

const getgenerador_2= async(req,res)=>{
    const response= await pool.query('SELECT * FROM generador2')
    console.log(response.rows);
    res.status(200).json(response.rows);
 }

 const getdatos_extra= async(req,res)=>{
    const response= await pool.query('SELECT * FROM datos_extra')
    console.log(response.rows);
    res.status(200).json(response.rows);
 }



const generador1=async (req,res)=>{ 
    console.log(req.body)
    let rtp=req.body['Generadores']['RTP']
    let rt1=req.body['Generadores']['RT1']
    let rt2=req.body['Generadores']['RT2']
    let rt3=req.body['Generadores']['RT3']
    let rtplh=req.body['Generadores']['RTPLH']
    let rt1lh=req.body['Generadores']['RT1LH']
    let rt2lh=req.body['Generadores']['RT2LH']
    let rt3lh=req.body['Generadores']['RT3LH']    
    let now=new Date()
    console.log(now)
    
    var {R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72}=req.body['Generadores']['Generador 2']
    const response=await pool.query
    ('INSERT INTO generador2 (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38)',
    [R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72])
    

 
    var {R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72}=req.body['Generadores']['Generador 1']
    const response2=await pool.query
    ('INSERT INTO generador1 (r1,r2,r3,r4,r5,r6,r7,r8,r9,r10,r11,r12,r13,r14,r15,r16,r17,r18,r19,r20,r55,r56,r57,r58,r59,r60,r61,r62,r63,r64,r65,r66,r67,r68,r69,r70,r71,r72) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38)',
    [R1,R2,R3,R4,R5,R6,R7,R8,R9,R10,R11,R12,R13,R14,R15,R16,R17,R18,R19,R20,R55,R56,R57,R58,R59,R60,R61,R62,R63,R64,R65,R66,R67,R68,R69,R70,R71,R72])
    
    
    const response3=await pool.query
    ('INSERT INTO datos_extra (rtp,rt1,rt2,rt3,rtplh,rt1lh,rt2lh,rt3lh) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',
    [rtp,rt1,rt2,rt3,rtplh,rt1lh,rt2lh,rt3lh])


    res.json({
        message:'orden enviada con exito',
        body:{
            'r1':R1,
            'r2':R2,
            'r3':R3,
            'r4':R4,
            'r5':R5,
            'r6':R6,
            'r7':R7,
            'r8':R8,
            'r9':R9,
            'r10':R10,
            'r11':R11,
            'r12':R12,
            'r13':R13,
            'r14':R14,
            'r15':R15,
            'r16':R16,
            'r17':R17,
            'r18':R18,
            'r19':R19,
            'r20':R20,
            'r55':R55,
            'r56':R56,
            'r57':R57,
            'r58':R58,
            'r59':R59,
            'r60':R60,
            'r61':R61,
            'r62':R62,
            'r63':R63,
            'r64':R64,
            'r65':R65,
            'r66':R66,
            'r67':R67,
            'r68':R68,
            'r69':R69,
            'r70':R70,
            'r71':R71,
            'r72':R72,  
        }
    })
    
}


//mostrar un dato
const getGenerador1ById=async (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM generador1 WHERE id=$1',[id]);
    res.json(response.rows);

}

const getGenerador2ById=async (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM generador2 WHERE id=$1',[id]);
    res.json(response.rows);

}

const getDatosExtrasById=async (req,res)=>{
    const id=req.params.id;
    const response= await pool.query('SELECT * FROM datos_extras WHERE id=$1',[id]);
    res.json(response.rows);

}





//exportar modulos
module.exports={
    getgenerador_1,
    getgenerador_2,
    getdatos_extra,
    getGenerador1ById,
    getGenerador2ById,
    getDatosExtrasById,
    generador1,
    
}