import React, { useState, useRef } from 'react';
import Layout from 'components/common/Layout';
import CategoryMain from 'components/category/CategoryMain';
import Image from 'next/image';
import styled from 'styled-components';
import theme from 'styles/theme';
import Folder from 'assets/icon/folder_filled.png';
import Add from 'assets/icon/add.png';
import Hanger from 'assets/icon/total_clothes.png';
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