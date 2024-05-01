import { SideBarContent, TitleTrans } from "./styles";
import transImg from '../../assets/transImg.svg'


export function SideBar() {
    return(
        <>
            <SideBarContent>
                <TitleTrans>
                    <img src={transImg}></img>
                    MyTrans Diary
                </TitleTrans>
                <div>
                    <ul>
                        <a href="">Início</a>
                        <a href="">Doses</a>
                        <a href="">Humor do dia</a>
                        <a href="">Notas</a>
                    </ul>
                </div>
            </SideBarContent>
        </>
    );
}
