export const userColumns= [
    
        {
            field:"id",
            headerName:"ID",
            width:70
        },
        {
            field:"user",
            headerName:"User",
            width:230,
            renderCell:(params)=>{
                return(
                    <div className="cellWithImg"> <img className="cellImg"  src={params.row.img} alt="avatar"/>
                    {params.row.username}
                    </div>
                );
            },
        },
    {
        field:"email", headerName:"Email" , width:230,
    },
    {
        field:"age", headerName:"Age" , width:100,
    },
    {
        field:"status", headerName:"Status" , width:160,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}` }>{params.row.status}</div>
            )
        }
    },
];




//temporary data
export const userRows=[
    {
        id:1,
        username:"John sow",
        img:"https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
        status:"active",
        email:"1snow@gmail.com",
        age:35,
    },
    {
        id:2,
        username:"  jamie Lannister",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFun5EEX9zyfnh1OEOeKgsIMUkUFttpbj1khic1CAU9SmbbIc-gmGDlRiBpcV59d49rLA&usqp=CAU",
        email:"2jamie@gmail.com",
        status:"passive",
        age:42,
    },
    {
        id:3,
        username:"Lannister",
        img:"https://images.pexels.com/photos/2467401/pexels-photo-2467401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        email:"3lannie@gmail.com",
        status:"pending",
        age:42,
    },
    {
        id:4,
        username:"Stark",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTazwCY0nlbvCtUJ4Scn9E8zZFLnS8xutWpEgFuOdYjfeXGpnxDlv7s4a07bxKQPJrvhB4&usqp=CAU",
        email:"astarck@gmail.com",
        status:"active",
        age:16
    },
    {
        id:5,
        username:"Targaryen",
        img:"https://blog-consumer.glassdoor.com/app/uploads/sites/2/why-are-you-the-best-person-for-this-job.jpg",
        email:"5taran@gmail.com",
        status:"passive",
        age:22,
    },
    {
        id:6,
        username:"Melisandre",
        img:"http://jobs.washingtonpost.com/getasset/82964aed-3ac4-4a06-b95d-9a08b1b78d69/",
        email:"6melis@gmail.com",
        status:"active",
        age:14,
    },
    {
        id:7,
        username:"clifford",
        img:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        email:"6cliff@gmail.com",
        status:"passive",
        age:44,
    },
    {
        id:8,
        username:"Frances",
        img:"https://img.freepik.com/free-photo/half-profile-image-handsome-young-caucasian-man-with-good-skin-brown-eyes-black-stylish-hair-stubble-posing-isolated-against-blank-wall-looking-front-him-smiling_343059-4560.jpg?w=360",
        email:"frances@gmail.com",
        status:"active",
        age:36,
    },
    {
        id:9,
        username:"Roxie",
        img:"https://cdn-biiph.nitrocdn.com/UZREvxxQGAxeXhcoPyzyCLtvaevIaCgD/assets/static/optimized/rev-4ba1fa5/wp-content/uploads/2021/08/NicoleArztsBrandSession-60-scaled-e1630341541114-300x285.jpg",
        email:"roxie@gmail.com",
        status:"pending",
        age:65,
    },
    {
        id:10,
        username:"Joe",
        img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
        email:"joe@gmail.com",
        status:"active",
        age:65,
    },
];