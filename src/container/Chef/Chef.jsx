import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app_wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's word" />
      <h1 className='headtext__cormorant'>What we believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content-quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            quis veniam deleniti nulla quia at repudiandae non error, molestias
            dolor reiciendis corporis minima sit maiores cumque, illum vitae rem
            recusandae?
          </p>
        </div>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quod
          dolor temporibus cumque laboriosam dignissimos ex sapiente sunt a odio
          autem deleniti totam iste ducimus perferendis porro explicabo?
          Voluptatem, ut.
        </p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & founder</p>
        <img src={images.sign} alt='sign' />
      </div>
    </div>
  </div>
);

export default Chef;
