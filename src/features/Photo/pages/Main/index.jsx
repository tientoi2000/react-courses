import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import './styles.scss';

MainPage.propTypes = {};

function MainPage(props) {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos);
    const history = useNavigate();
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        // console.log('Edit: ', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history(editPhotoUrl);
    }

    const handlePhotoRemoveClick = (photo) => {
        // console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

            <Container className="text-center">
                <div className="add-photo">
                    <Link className="add-new-photo" to="add">Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    );
}

export default MainPage;