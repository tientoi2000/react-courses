import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
AlbumFeature.propTypes = {
    AlbumList: PropTypes.array,
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac thinh hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/c/f/c/8cfc65d64f802eae288d9fcb618d9b7c.jpg'
        },
        {
            id: 2,
            name: 'Rap viet thinh hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/c/f/c/8cfc65d64f802eae288d9fcb618d9b7c.jpg'
        },
        {
            id: 3,
            name: 'Nhac thinh hanh',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/c/f/c/8cfc65d64f802eae288d9fcb618d9b7c.jpg'
        }
    ]
    return (
        <div>
            <h2>Co the ban se thich</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;