import style from "../../../styles/Home/Nav/searchBox.module.css"

export default function SearchBox(){
  return(
    <>
      <div className={style.wrap}>
        <input type="text" name="search" placeholder="찾고자 하는 시설을 검색하세요" autoComplete="off"/>
      </div>
    </>
  )
}