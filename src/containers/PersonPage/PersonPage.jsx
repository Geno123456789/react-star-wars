import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { withErrorApi } from '@hoc-helper/withErrorApi';
import { API_PERSON } from '@constants/api';
import styles from './PersonPage.module.css'
import { getApiResorce } from '@utils/network';
import { getPeopleImage } from '@services/getPeopleData';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPhoto/PersonPhoto';
import PersonLinkBack from '@components/PersonLinkBack/PersonLinkBack';
import UiLoading from '@components/UI/UiLoading/UiLoading';
import { useSelector } from 'react-redux';


const PersonFilms = React.lazy(() => import('@components/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPersonId] = useState(null);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false);

    const storeData = useSelector(state => state.favoriteReducer);
    const { id } = useParams();
  
    useEffect(() => {
        (async () => {
            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);
            const res = await getApiResorce(`${API_PERSON}/${id}/`);
            
            setPersonId(id);
            if (res) {
                setPersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Eye Color', data: res.eye_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false);
            } else {
                setErrorApi(true);
            }
        })();
    }, [])

    return (
        <>
            <PersonLinkBack />
            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>
                <div className={styles.container}>
                    <PersonPhoto personPhoto={personPhoto} personName={personName} personId={personId} 
                    personFavorite={personFavorite} setPersonFavorite={setPersonFavorite} />
                    {personInfo && <PersonInfo personInfo={personInfo} />}
                    {personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilms personFilms={personFilms} />
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);