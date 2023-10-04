import Slider from "../Slider/Slider";
import Table from "../Table/Table";
import st from "./style.module.scss";
import image from "../../Images/video-calling.png";
import NotFoundPage from "../NotFoundPage/NotFoundPage";


export default function Home() {
  return (
    <div className={st.container_home}>
      <div className={st.image}>
      <img className={st.image} src={image} alt="welcome-img"/>
      </div>
      <h1>The easy, fun and effective way to learn English!</h1>
      <Slider></Slider>
      <Table></Table>
      <NotFoundPage></NotFoundPage>
    </div>
  )
}