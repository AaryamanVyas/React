function Sidebar () {
    aside {
        background: azure;
        width: calc(30% - 10px);
        margin-left: 10px;
      }
    
    return (
        <aside className="sidebar-component">
            <h2>Sidebar content here</h2>
        </aside>
    )
    
}

export default Sidebar;