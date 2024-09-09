import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Icon, SearchBar, TabBar } from '@ant-design/react-native'
import DisplaySection from '../../components/DisplaySection';
import InfoSection from '../../components/InfoSection';

export default function index() {
    const [selectedTab, setSelectedTab] = useState('redTab');

    const renderContent = () => {
        return (
          <View style={{ flex: 1, backgroundColor: 'white', marginTop: 16, paddingHorizontal: 8 }}>
            <SearchBar placeholder="Search on renit" showCancelButton={false} style={{height:40, backgroundColor: 'white'}}/>
            <ScrollView>
                <DisplaySection items={[
                    {
                        image: 'https://t3.ftcdn.net/jpg/05/40/34/28/360_F_540342803_QwNUPFqwpa2eL27iW5E6WSuBf2OWAIeJ.jpg',
                        header: 'Automobile'
                    },
                    {
                        image: 'https://r2.erweima.ai/imgcompressed/compressed_967ce0193f3d5ebaadd82d80ca7f1f44.webp',
                        header: 'Real Estate'
                    },
                    {
                        image: 'https://png.pngtree.com/png-vector/20230815/ourmid/pngtree-set-of-stickers-on-a-dark-background-with-various-sports-balls-vector-png-image_6908764.png',
                        header: 'Sports'
                    },
                    {
                        image: 'https://pngimg.com/d/book_PNG51089.png',
                        header: 'Books'
                    }
                ]}/>
                <DisplaySection items={[
                    {
                        image: 'https://t3.ftcdn.net/jpg/05/40/34/28/360_F_540342803_QwNUPFqwpa2eL27iW5E6WSuBf2OWAIeJ.jpg',
                        header: 'Automobile'
                    },
                    {
                        image: 'https://r2.erweima.ai/imgcompressed/compressed_967ce0193f3d5ebaadd82d80ca7f1f44.webp',
                        header: 'Real Estate'
                    },
                    {
                        image: 'https://png.pngtree.com/png-vector/20230815/ourmid/pngtree-set-of-stickers-on-a-dark-background-with-various-sports-balls-vector-png-image_6908764.png',
                        header: 'Sports'
                    },
                    {
                        image: 'https://pngimg.com/d/book_PNG51089.png',
                        header: 'Books'
                    }
                ]}/>
                <DisplaySection 
                    title={'Top Experiences'}
                    size={140}
                    align={'left'} 
                    items={[
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                    ]}/>
                <DisplaySection 
                   title={'Top picks to explore'}
                    size={140}
                    align={'left'} 
                    items={[
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                   ]}/>
                <DisplaySection 
                   title={'Popular Near you'}
                    size={140}
                    align={'left'} 
                    items={[
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                        {
                            image: 'https://www.dugoutchennai.com/wp-content/uploads/2022/12/fustal1-1024x1024.jpg',
                            header: 'Equilt Turf',
                            subheader: 'BKC Mumbai',
                            pricePerDay: '600'
                        },
                        {
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpZ9gmlJQciNBSfYnIxxzysvtCkYxM7hbIg&s',
                            header: 'Tennis Court',
                            subheader: 'Juhu Mumbai',
                            pricePerDay: '870'
                        },
                   ]}/>
                <InfoSection />
            </ScrollView>
          </View>
        )
      }

  return (
    // <View>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#fff">
        <TabBar.Item
          title="Home"
          icon={<Icon name="home" />}
          selected={selectedTab === 'home'}
          onPress={() => setSelectedTab('home')}>
          {renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="Saved"
          badge={2}
          selected={selectedTab === 'saved'}
          onPress={() => setSelectedTab('saved')}>
          {renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="Post"
          selected={selectedTab === 'post'}
          onPress={() => setSelectedTab('post')}>
          {renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="Chat"
          selected={selectedTab === 'chat'}
          onPress={() => setSelectedTab('chat')}>
          {renderContent()}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="Profile"
          selected={selectedTab === 'profile'}
          onPress={() => setSelectedTab('profile')}>
          {renderContent()}
        </TabBar.Item>
      </TabBar>
    // </View>
  )
}