import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import './index.css'

//  bug - 16 => UserInfo and BlogList components are declared in one div container

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
    </div>
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
