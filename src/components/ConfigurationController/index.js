import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = () => {
        onToggleShowContent({showContent: !showContent})
      }

      const onClickLeftNavbar = () => {
        onToggleShowLeftNavbar({showLeftNavbar: !showLeftNavbar})
      }

      const onClickRightNavbar = () => {
        onToggleShowRightNavbar({showRightNavbar: !showRightNavbar})
      }

      return (
        <div>
          <h1>Layout</h1>

          <input type="checkbox" onChange={onClickContent} id="content" />
          <label htmlFor="content">Content</label>
          <br />
          <input type="checkbox" onChange={onClickLeftNavbar} id="leftBar" />
          <label htmlFor="leftBar">Left NavBar</label>
          <br />
          <input type="checkbox" onChange={onClickRightNavbar} id="rightBar" />
          <label htmlFor="rightBar">Right NavBar</label>
          <br />
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
