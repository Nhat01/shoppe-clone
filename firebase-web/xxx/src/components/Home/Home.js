import './home.css'
import './res.css'
import {list} from '../../redux/store'
import '../../grid.css'


const Home = () => {
  
  console.log(list);
  return (
    <div className="grid wide">
      <a href="/" className="plist-title">Trang 1</a>
      <div className="plist-content">

        <div className="row m-gutter">
          {list && list.map((item, index) => {
            return (
                <div className="col l-3 m-3 c-3" key={index}>
                  <a href={`/${index}`} className="plist-item-carousel">
                      {item.img && <img src={item.img} referrerPolicy="no-referrer" alt="a" className="plist-img" />}
                      <h3 className="plist-content-title">{item.title}</h3>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home