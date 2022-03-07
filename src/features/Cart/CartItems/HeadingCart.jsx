import React from 'react';
import './headingCart.scss';
HeadingCart.propTypes = {

};

function HeadingCart(props) {
    return (
        <div className="heading-cart">
            <div className="heading-product">Sản Phẩm</div>
            <div className="heading-price">Đơn Giá</div>
            <div className="heading-quantity">Số Lượng</div>
            <div className="heading-delete">Thao Tác</div>
        </div>
    );
}

export default HeadingCart;