import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';




function Lboard() {
  const data = [
    {
        Name: "Mathesh Yogeswaran",
        Score: "383 points",
        Rank: "1",
        img: "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1"
    },
    {
        Name: "Jathishwarya Venugopal",
        Score: "379 points",
        Rank: "2",
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        Name: "Kajanth Pathmanathan",
        Score: "360 points",
        Rank: "3",
        img: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
    },
    {
        Name: "Varaki Vakeesan",
        Score: "358 points",
        Rank: "4",
        img: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
    },
    {
        Name: "Mathesh Yogeswaran",
        Score: "342 points",
        Rank: "5",
        img: "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png?resize=502%2C494&ssl=1"
    },
    {
        Name: "Jathishwarya Venugopal",
        Score: "337 points",
        Rank: "6",
        img: "https://www.w3schools.com/howto/img_avatar2.png"
    },
    {
        Name: "Kajanth Pathmanathan",
        Score: "329 points",
        Rank: "7",
        img: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
    },
    {
        Name: "Varaki Vakeesan",
        Score: "310 points",
        Rank: "8",
        img: "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
    },
]

const renderdata = (data, index) => {
  return(
    <tr key={index} class="col-md-4">
      <td><span class="m-5 p-5"><img class="rounded-circle" width={75}
        height={75} src={data.img} /></span></td>
      <td><span class="m-5 p-5">{data.Name}</span></td>
      <td><span class="m-5 p-5">{data.Score}</span></td>
      <td><span class="m-5 p-5">{data.Rank}</span></td>
    </tr>
  )
}
  return (
    <div>
    <Navbar/>
    <h1 class="position-absolute top-16 start-50 translate-middle-x">Ranking</h1><br/><br/>
      <table>
        <tbody className='tablecontent'>
          {data.map(renderdata)}
        </tbody>
      </table>
    </div>
  );
}

export default Lboard;
