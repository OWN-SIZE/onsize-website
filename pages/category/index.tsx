import React, { useRef,useState } from 'react';
import Add from 'assets/icon/add.png';
import Folder from 'assets/icon/folder_filled.png';
import Hanger from 'assets/icon/total_clothes.png';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';

import CategoryMain from 'components/category/CategoryMain';
import Layout from 'components/common/Layout';
import Modal from 'components/common/Modal';
import ThumbNail from 'components/common/ThumbNail/ThumbNail';

import CategoryCreateModal from '../../components/common/modal/CategoryCreateModal';

export default function category() {
  return (
    <Layout>
      <CategoryMain></CategoryMain>
    </Layout>
  );
}
