'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

// Images
import { FaLink } from "react-icons/fa6";

// Include in project
import { ContentWrapper } from '@/components/shared';
import { TReccomendedProject } from '@/utils/type';

type Props = {
    dataList: TReccomendedProject[]
}

const CoverFlow: React.FC<Props> = ({ dataList }) => {
    console.log("🚀 ~ dataList:", dataList)

    return (
        <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className='w-full'
        >
            {dataList?.map((ele, _) => (
                <SwiperSlide key={ele.id}>
                    <ContentWrapper>
                        <div
                            className='h-[500px] w-full rounded-2xl overflow-hidden bg-cover bg-center p-8 flex flex-col justify-end relative border-2 border-light/40'
                            style={{ backgroundImage: `url(${ele.background_image})` }}
                        >   <div className='z-10 space-y-2'>
                                <a href={ele.href} className='flex gap-2 transition-colors hover:text-primary w-fit'>
                                    <h2>{ele.title}</h2>
                                    <FaLink />
                                </a>
                                <p className='line-clamp-2'>{ele.description}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {ele.tools?.map((tool, toolIndex) => (
                                        <p key={toolIndex} className='border border-light py-0.5 px-2 rounded-full text-xs'>{tool}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='h-40 w-full bg-gradient-to-t from-dark/90 to-transparent absolute bottom-0 left-0' />
                        </div>
                    </ContentWrapper>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default CoverFlow