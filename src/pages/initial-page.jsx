import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Log from '../containers/log'

const InitialPage = () => (
  <Layout>
    <Header title="Fugit" scroll>
    </Header>
    <Drawer title="Commands" >
      <Navigation>
        <a href="">Main</a>
      </Navigation>
    </Drawer>
    <Content>
      <div className="page-content">
        <Log uri="." />
      </div>
    </Content>
  </Layout>
)

export default InitialPage
