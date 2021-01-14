import React from 'react';
import { Brand } from '../brand';
import { BorderBtn } from '../borderBtn';

const Header: React.FunctionComponent = () => {
    return <div className="container-fluid justify-content-center">
          <div className="row">
            <div className="col-lg-1"><Brand /></div>
            <div className="col-lg-1 offset-lg-10">
              <BorderBtn name="CV" onClick={() => {}}/>
            </div>
          </div>
      </div>
}

export default Header;