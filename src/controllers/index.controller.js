const {Pool}=require('pg')

const pool=new Pool({
    host:'172.18.0.165',
    port:'6002',
    user:'postgres',
    password:'Argul1266',
    database:'json_2'
    
})

const getInfo= async(req,res)=>{
   const response= await pool.query('SELECT * FROM info2')
   console.log(response.rows);
   res.status(200).json('info');
}

const createInfo=async(req,res)=>{
    const response=await pool.query("INSERT INT0 info (id,orden,producto,materia,inyectora,molde,ciclo) VALUES (8630,90453,20041,'MIF10/3',190,17)")
}

module.exports={
    getInfo,
    createInfo
}