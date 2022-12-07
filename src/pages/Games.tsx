import { useNavigate } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Card } from "../components/Card";

import "../styles/games.scss";

export function Games() {
  const navigate = useNavigate();

  function goToStray() {
    navigate("/games/stray");
  }

  return (
    <div className="container">
      <div id="header">
        <Navbar />
        <div className="genres">
          <div className="row">
            <div className="subrow">
              <Button isCatalogo>TERROR</Button>
              <Button isCatalogo>ESTRATÉGIA</Button>
            </div>
            <div className="subrow">
              <Button isCatalogo>CORRIDA</Button>
              <Button isCatalogo>RPG</Button>
            </div>
          </div>
          <div className="row">
            <div className="subrow">
              <Button isCatalogo>AVENTURA</Button>
              <Button isCatalogo>ESPORTE</Button>
            </div>
            <div className="subrow">
              <Button isCatalogo>INDIE</Button>
              <Button isCatalogo>SIMULAÇÃO</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="games">
        <div className="cards">
          <p>20 resultados encontrados</p>
          <div className="cards-row">
            <Card
              onClick={goToStray}
              src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vZwVaDJbhLZpJo7Q10IyYo.png"
            />
            <Card src="https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7" />
            <Card src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSNVWbj94_0fHCVRZnDauqKZmUm71CpUQP3rjznvPGS6J02L91G" />
            <Card src="https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg" />
          </div>
          <div className="cards-row">
            <Card src="https://www.bing.com/th?id=OSK.b0386f0a9fbcfa36426386a0eec4c662&w=124&h=168&c=7&o=6&pid=SANGAM" />
            <Card src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLEG0GDb_DlnCTpXc02lqPE7zhT0FFboSNbd1hw_kdeVqdjCV_" />
            <Card src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbw2O7TTFoAyY5_PToeGK_hhwbpKZaKH1XA8n7zExTm3YXFLTc" />
            <Card src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRkVCdB_CiRCxKc8K2H_ybJOuwub2PKkwsn3xlXRpEjvFK_w3zY" />
          </div>
          <div className="cards-row">
            <Card src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTRC89QJiKQt0iNCtoBMl0Wk3befW32OPD1ykofpezl6BEivOxu" />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlHpvOOEY8TsGSg0WpILSFYVXe8Vte4wpzPCKlODWWhHupdRM" />
            <Card src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRY2vZ83MNN-FKLj-0Dm-JOuYsloYLGNKMDP-XZJ_VsKQP7F0So" />
            <Card src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CaQP6RmNYA6yqlcymk2RYzynTttycuLet3MKsm9RP-baBu_z" />
          </div>
          <div className="cards-row showmore">
            <Card src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZ4U3QxQ3RhMwhVb97z0b-71dp38QQ23c_YT93_xuTbBdj6hq3" />
            <Card src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDYdZ5vlDuJE3SLlE2vJipB0pwIq5GsekGdchvVMcNNx4bLPxu" />
            <Card src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSi8_OFciD5u9rbzdWH0dhM6EYSNebYg0EjfPcSpTcnoJiCe77" />
            <Card src="https://store-images.s-microsoft.com/image/apps.57857.65290118777571754.6267d8c2-383e-428a-9ec3-ab8b52cdb946.587d40ca-3391-41db-b9fe-be44f2174488" />
          </div>
        </div>
        <div className="buttons">
          <Button id="show-more">mostrar mais</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
