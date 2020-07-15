import React from 'react';

import style from './AboutPage.module.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';


const AboutPage = () => {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h1 className={style.title}>About</h1>
                        <p className={style.description}>User is able to see a LIST/GRID of users when App is started and have possibility to switch users view between LIST and GRID using view change button in the header.
                        User is able to refresh page with new users by clicking on refresh button.
                        User is able to go to About Page for more information about this App by clicking on About button.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus sollicitudin mi, sed porta est molestie in. Phasellus volutpat nec sapien ut pulvinar. Proin posuere vel dolor a elementum. Integer nec ullamcorper elit. Integer dui mauris, sollicitudin a nisl in, commodo pretium augue. In id dapibus est, eget sollicitudin turpis. Nullam iaculis ut elit sit amet consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id magna gravida, sagittis diam sit amet, elementum elit. Sed convallis nisl orci, a hendrerit velit fermentum ac. Vivamus vestibulum libero et interdum pellentesque.
                        Donec urna risus, porttitor eget eleifend et, pulvinar ac quam. Ut convallis sagittis leo sed pulvinar. Cras ac nibh mi. Maecenas a pulvinar risus. Nunc vitae ipsum rhoncus, pellentesque turpis id, tempus quam. Sed lacus felis, tincidunt quis nisi quis, ullamcorper sollicitudin eros. Curabitur condimentum porta tellus, eu sollicitudin urna sagittis quis. In consectetur metus et urna vulputate fermentum. Sed lacinia bibendum dolor. Morbi consequat, ligula at facilisis hendrerit, velit erat ultricies nulla, non ultricies ex augue sit amet sapien. Sed sed nisi velit. Sed auctor ultricies nisl id condimentum. Sed quis magna cursus, dictum lorem ac, egestas nibh. Proin commodo dui sit amet imperdiet iaculis. Cras a sagittis orci.
                        Donec ac dui imperdiet, tristique neque in, mollis diam. Morbi vel urna vel mauris pellentesque facilisis eget vitae enim. Donec lectus urna, facilisis ut mattis et, lobortis ac tortor. Etiam tincidunt rhoncus cursus. Fusce ullamcorper felis at enim fermentum, et mattis neque tincidunt. Nullam eu ante ex. Integer non rutrum ex. Fusce viverra gravida est in pellentesque. Maecenas lorem odio, laoreet sed tincidunt vitae, finibus nec augue. Quisque eget mauris tristique ex vulputate vestibulum. Nunc varius semper viverra. Cras ornare libero quis efficitur malesuada. Donec sodales mollis leo, et tempor arcu imperdiet quis. Aliquam sit amet fringilla libero. Phasellus rhoncus, lacus eget laoreet posuere, eros tellus laoreet purus, sed egestas neque purus vitae orci. Cras bibendum mattis metus, ac rutrum ligula auctor vitae.
                        Aliquam dictum convallis metus, sit amet commodo lorem eleifend vel. Duis faucibus fringilla malesuada. Etiam eget ipsum sagittis, lobortis purus in, interdum tortor. Integer mi sapien, rutrum et aliquet eu, auctor ac enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis massa ipsum, tincidunt id nunc sit amet, mollis pulvinar nisl. Phasellus rutrum metus felis, ac sodales metus facilisis sed. Nunc facilisis sed est a congue. Aenean scelerisque, odio et mollis rutrum, purus nibh mattis ipsum, a pellentesque urna mauris et eros. Lacus eget laoreet posuere, eros tellus laoreet purus, sed egestas neque purus vitae orci. Cras bibendum mattis metus, ac rutrum ligula auctor vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus sollicitudin mi, sed porta est molestie in. Phasellus volutpat nec sapien ut pulvinar. Proin posuere vel dolor a elementum. Integer nec ullamcorper elit. Integer dui mauris, sollicitudin a nisl in, commodo pretium augue. In id dapibus est, eget sollicitudin turpis. Nullam iaculis ut elit sit amet consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id magna gravida, sagittis diam sit amet, elementum elit. Sed convallis nisl orci, a hendrerit velit fermentum ac. Vivamus vestibulum libero et interdum pellentesque.
                        Donec urna risus, porttitor eget eleifend et, pulvinar ac quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus sollicitudin mi, sed porta est molestie in. Phasellus volutpat nec sapien ut pulvinar. Proin posuere vel dolor a elementum. Integer nec ullamcorper elit. Integer dui mauris, sollicitudin a nisl in, commodo pretium augue. In id dapibus est, eget sollicitudin turpis. Nullam iaculis ut elit sit amet consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id magna gravida, sagittis diam sit amet, elementum elit. Sed convallis nisl orci, a hendrerit velit fermentum ac. Vivamus vestibulum libero et interdum pellentesque.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export { AboutPage };