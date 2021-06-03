/* eslint-disable react-hooks/exhaustive-deps */
import { Space } from "antd";
import {
  Logo,
  IconArweave,
  IconEthereum,
  IconFish
} from "assets/images";
import React, { useContext, useState, useRef } from "react";
import { Navbar, Nav, Image, Overlay, Tooltip, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { DataContext } from "contexts/DataContextContainer";
import { TopbarContainer } from "./style";
import { show_ar_balance, show_digit_number } from "services/utils";

function Topbar() {
  const history = useHistory();
  const {
    balanceKoi,
    balanceAr,
    setAddressAr,
    keyAr,
    setKeyAr,
    setBalanceKoi,
    setBalanceAr
  } = useContext(DataContext);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const activeKoi = async () => {
    if (!keyAr) {
      history.push("/wallet-key");
    }
  };
  const onClickDisconnectWallet = () => {
    setAddressAr(null)
    setKeyAr(null)
    setBalanceKoi(null)
    setBalanceAr(null)
    setShow(false)
  }
  
  return (
    <TopbarContainer collapseOnSelect expand="md" fixed="top">
      <Link to="/" className="navbar-brand">
        <Image src={Logo} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <i className="fas fa-bars"></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link to="/faucet?step=0" className="btn-nav">
            Faucet
          </Link>
          <a
            href="https://openkoi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav"
          >
            OpenKoi
          </a>
          {balanceKoi === null ? (
            <Space
              size={12}
              className="btns-connect cursor"
              onClick={activeKoi}
            >
              <p className="text-blue mb-0 text-bold">Connect Wallet</p>
              <Image src={IconArweave} className="cursor" width={18} />
              <Image src={IconEthereum} className="cursor" width={18} />
            </Space>
          ) : (
            <div ref={target} className="dropdown-area">
              <Space size={12} className="btns-connect cursor" onClick={() => setShow(!show)}>
                <span className="text-blue mb-0 text-bold">{show_digit_number(balanceKoi)}</span>
                <Image
                  src={IconFish}
                  className="cursor"
                  width={18}
                />
                <span className="text-blue mb-0 text-bold">{show_ar_balance(balanceAr)}</span>
                <Image
                  src={IconArweave}
                  className="cursor"
                  width={18}
                />
              </Space>
            </div>
          )}
          <Overlay
            target={target.current}
            show={show}
            onHide={() => setShow(false)}
            placement="bottom-end"
            rootClose
          >
            {(props) => (
              <Tooltip
                id="overlay-nav"
                {...props}
                arrowProps={{ style: { display: "none" } }}
              >
                <div className="overlay-header"></div>
                <div className="overlay-body">
                  <div className="overlay-body-row">
                    <p className="text-bold">Account summary</p>
                  </div>
                  {/* <div className="overlay-body-row">
                    <p>Total views</p>
                    <p className="overlay-value">7,124</p>
                    <Image src={IconEyes} className="ml-2" />
                  </div> */}
                  <div className="overlay-body-row">
                    <p>KOI </p>
                    <p className="overlay-value">{show_digit_number(balanceKoi)}</p>
                    <Image src={IconFish} className="ml-2" />
                  </div>
                  <div className="overlay-body-row">
                    <p>AR </p>
                    <p className="overlay-value">{show_ar_balance(balanceAr)}</p>
                    <Image src={IconArweave} className="ml-2" />
                  </div>
                  <div className="overlay-body-row mt-3">
                    <Button
                      className="btn-disconnect mt-auto mx-auto"
                      onClick={onClickDisconnectWallet}
                    >
                      Disconnect Wallet
                    </Button>
                  </div>
                </div>
              </Tooltip>
            )}
          </Overlay>
        </Nav>
      </Navbar.Collapse>
    </TopbarContainer>
  );
}

export default Topbar;
