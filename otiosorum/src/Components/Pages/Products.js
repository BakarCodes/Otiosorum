import React from 'react'
import './Products.css'
import Card from '../Card'


function Products() {
  return (
      <div className='Products'>
          <h1 className='ProductTitle'>PRODUCTS</h1>
        <div className='Cards'>
                <h2 className='Hottest'>
                    HOTTEST
                </h2>
                    
            <div className='wrapper'>
                    
                    <Card
                        img="../images/Corteiz.jpg"
                        title="Corteiz"
                        description="Buy Corteiz">
                    </Card>

                    <Card
                        img="../images/Stussy.jpg"
                        title="Stussy"
                        description="Buy Stussy">
                    </Card>

                    <Card
                        img="../images/Corteiz.jpg"
                        title="GCLO"
                        description="Buy GCLO">
                    </Card>

                    <Card
                        img="../images/Stussy.jpg"
                        title="Stussy"
                        description="Buy Stussy">
                    </Card>
                </div>
                <h2 className='EyesOut'>
                    RISING
                </h2>

                <div className='Lookout'>
                    <Card
                        img="../images/Corteiz.jpg"
                        title="Corteiz"
                        description="Buy Corteiz">
                    </Card>

                    <Card
                        img="../images/Stussy.jpg"
                        title="Stussy"
                        description="Buy Stussy">
                    </Card>

                    <Card
                        img="../images/Corteiz.jpg"
                        title="GCLO"
                        description="Buy GCLO">
                    </Card>
                    <Card
                        img="../images/Stussy.jpg"
                        title="Stussy"
                        description="Buy Stussy">
                    </Card>
                </div>          
            </div>
    </div>
  )
}

export default Products