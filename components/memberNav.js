export default function MemberNav() {
  return (
    <>
      <nav className="c7-account__menu" role="navigation" aria-label="Account Menu">
        <div className="c7-wrapper">
          <ul>
            <li className="c7-active">
              <a aria-current="page" className="active" href="/profile/">Dashboard</a></li>
            <li className="">
              <a href="/profile/club-membership">Club Shipments</a></li>
            <li className="">
              <a href="/profile/order-history">Order History</a></li>
            <li className="">
              <a href="/profile/allocation">Allocations</a></li>
            <li className="">
              <a href="/profile/account">Account Details</a></li>
            <li className="">
              <a href="/profile/logout">Logout</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}