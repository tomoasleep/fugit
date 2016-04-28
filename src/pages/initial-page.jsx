import {Layout, Header, Drawer, Content, Navigation} from 'react-mdl';

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
        Hello, world!
      </div>
    </Content>
  </Layout>
)

export default InitialPage
