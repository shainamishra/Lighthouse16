class Inventory extends Phaser.Scene {
    constructor() {
        super("cardBox");
    }

    preload(){
        
    }
    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // page 1
        this.page1 = this.add.sprite(650, 350, 'set1');
        this.page1.setDisplaySize(1280, 720);
        this.page1.setVisible(false);
        
        this.one = this.add.sprite(150, 340, 'cardHit');
        this.one.setDisplaySize(210, 360);
        this.one.setVisible(false);
        this.one.setInteractive({
            useHandCursor: true
        });

        this.info1 = this.add.image(650, 350, 'info1');
        this.info1.setDisplaySize(1280, 720);
        this.info1.setVisible(false);

        this.two = this.add.sprite(400, 340, 'cardHit');
        this.two.setDisplaySize(210, 360);
        this.two.setVisible(false);
        this.two.setInteractive({
            useHandCursor: true
        });

        this.info2 = this.add.image(650, 350, 'info2');
        this.info2.setDisplaySize(1280, 720);
        this.info2.setVisible(false);

        this.three = this.add.sprite(645, 340, 'cardHit');
        this.three.setDisplaySize(210, 360);
        this.three.setVisible(false);
        this.three.setInteractive({
            useHandCursor: true
        });

        this.info3 = this.add.image(650, 350, 'info3');
        this.info3.setDisplaySize(1280, 720);
        this.info3.setVisible(false);

        this.four = this.add.sprite(890, 340, 'cardHit');
        this.four.setDisplaySize(210, 360);
        this.four.setVisible(false);
        this.four.setInteractive({
            useHandCursor: true
        });

        this.info4 = this.add.image(650, 350, 'info4');
        this.info4.setDisplaySize(1280, 720);
        this.info4.setVisible(false);

        this.five = this.add.sprite(1135, 340, 'cardHit');
        this.five.setDisplaySize(210, 360);
        this.five.setVisible(false);
        this.five.setInteractive({
            useHandCursor: true
        });
        
       

        this.info5 = this.add.image(650, 350, 'info5');
        this.info5.setDisplaySize(1280, 720);
        this.info5.setVisible(false);

        // page 2
        this.page2 = this.add.sprite(650, 350, 'set2');
        this.page2.setDisplaySize(1280, 720);
        this.page2.setVisible(false);
        this.one_2 = this.add.sprite(190, 340, 'cardHit');
        this.one_2.setDisplaySize(240, 420);
        this.one_2.setVisible(false);
        this.one_2.setInteractive({
            useHandCursor: true
        });

        this.info1_2 = this.add.image(650, 350, 'info1-2');
        this.info1_2.setDisplaySize(1280, 720);
        this.info1_2.setVisible(false);

        this.two_2 = this.add.sprite(485, 340, 'cardHit');
        this.two_2.setDisplaySize(240, 420);
        this.two_2.setVisible(false);
        this.two_2.setInteractive({
            useHandCursor: true
        });

        this.info2_2 = this.add.image(650, 350, 'info2-2');
        this.info2_2.setDisplaySize(1280, 720);
        this.info2_2.setVisible(false);

        this.three_2 = this.add.sprite(795, 340, 'cardHit');
        this.three_2.setDisplaySize(240, 420);
        this.three_2.setVisible(false);
        this.three_2.setInteractive({
            useHandCursor: true
        });

        this.info3_2 = this.add.image(650, 350, 'info3-2');
        this.info3_2.setDisplaySize(1280, 720);
        this.info3_2.setVisible(false);

        this.four_2 = this.add.sprite(1090, 340, 'cardHit');
        this.four_2.setDisplaySize(240, 420);
        this.four_2.setVisible(false);
        this.four_2.setInteractive({
            useHandCursor: true
        });

        this.info4_2 = this.add.image(650, 350, 'info4-2');
        this.info4_2.setDisplaySize(1280, 720);
        this.info4_2.setVisible(false);

        // page 3
        this.page3 = this.add.sprite(650, 350, 'set3');
        this.page3.setDisplaySize(1280, 720);
        this.page3.setVisible(false);

        // page 4
        this.page4 = this.add.sprite(650, 350, 'set4');
        this.page4.setDisplaySize(1280, 720);
        this.page4.setVisible(false);

        // page 5
        this.page5 = this.add.sprite(650, 350, 'set5');
        this.page5.setDisplaySize(1280, 720);
        this.page5.setVisible(false);

        // page 6
        this.page6 = this.add.sprite(650, 350, 'set6');
        this.page6.setDisplaySize(1280, 720);
        this.page6.setVisible(false);

        // page 7
        this.page7 = this.add.sprite(650, 350, 'velvet1');
        this.page7.setDisplaySize(1280, 720);
        this.page7.setVisible(false);

        // 4 card bg
        this.v4 = this.add.sprite(650, 350, 'velvet4');
        this.v4.setDisplaySize(1280, 720);
        this.v4.setVisible(false);

        // 5 card bg
        this.v5 = this.add.sprite(650, 350, 'velvet5');
        this.v5.setDisplaySize(1280, 720);
        this.v5.setVisible(false);

        // 5 card bg
        this.v1 = this.add.sprite(650, 350, 'velvet1');
        this.v1.setDisplaySize(1280, 720);
        this.v1.setVisible(false);

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        // content1
        this.content1 = this.add.sprite(140, 665, 'hitbox');
        this.content1.setDisplaySize(50, 70);
        this.content1.setVisible(false);
        this.content1.setInteractive({
            useHandCursor: true
        });
        
        // content2
        this.content2 = this.add.sprite(325, 665, 'hitbox');
        this.content2.setDisplaySize(50, 70);
        this.content2.setVisible(false);
        this.content2.setInteractive({
            useHandCursor: true
        });

        // content3
        this.content3 = this.add.sprite(530, 665, 'hitbox');
        this.content3.setDisplaySize(50, 70);
        this.content3.setVisible(false);
        this.content3.setInteractive({
            useHandCursor: true
        });

        // content4
        this.content4 = this.add.sprite(750, 665, 'hitbox');
        this.content4.setDisplaySize(50, 70);
        this.content4.setVisible(false);
        this.content4.setInteractive({
            useHandCursor: true
        });

        // content5
        this.content5 = this.add.sprite(960, 665, 'hitbox');
        this.content5.setDisplaySize(50, 70);
        this.content5.setVisible(false);
        this.content5.setInteractive({
            useHandCursor: true
        });

        // content6
        this.content6 = this.add.sprite(1165, 665, 'hitbox');
        this.content6.setDisplaySize(50, 70);
        this.content6.setVisible(false);
        this.content6.setInteractive({
            useHandCursor: true
        });
        
        // 6 page toc
        this.sixTOC = this.add.image(640, 370, '6overlay');
        this.sixTOC.setDisplaySize(1280, 720);
        this.sixTOC.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //god forsaken variables
        this.page = 1;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x291745).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x291745).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // "x" to close inventory
        this.closeInven.on('pointerdown', () => {
            this.scene.stop("cardBox");
            this.scene.wake(prevScene);
        });

        // show inventory close button
        this.closeInven.setVisible(true);
        // 1 button
        this.content1.setVisible(true);
        // 2 button
        this.content2.setVisible(true);
        // 3 button
        this.content3.setVisible(true);
        // 4 button
        this.content4.setVisible(true);
        // 5 button
        this.content5.setVisible(true);
        // 6 button
        this.content6.setVisible(true);
        // show toc
        this.sixTOC.setVisible(true);
        
        // first page
        if (this.page == 1){
            // show page1
            this.page1.setVisible(true);
            
            this.one.setVisible(true);
            this.one.on('pointerover', (pointer) => {
                this.info1.setVisible(true);
            });
            // if hover off card1
            this.one.on('pointerout', (pointer) => {
                this.info1.setVisible(false);
            });
    
            // if hover on card2
            this.two.setVisible(true);
            this.two.on('pointerover', (pointer) => {
                this.info2.setVisible(true);
            });
            // if hover off card2
            this.two.on('pointerout', (pointer) => {
                this.info2.setVisible(false);
            });
    
            // if hover on card3
            this.three.setVisible(true);
            this.three.on('pointerover', (pointer) => {
                this.info3.setVisible(true);
            });
            // if hover off card3
            this.three.on('pointerout', (pointer) => {
                this.info3.setVisible(false);
            });
    
            // if hover on card4
            this.four.setVisible(true);
            this.four.on('pointerover', (pointer) => {
                this.info4.setVisible(true);
            });
            // if hover off card4
            this.four.on('pointerout', (pointer) => {
                this.info4.setVisible(false);
            });
    
            // if hover on card5
            this.five.setVisible(true);
            this.five.on('pointerover', (pointer) => {
                this.info5.setVisible(true);
            });
            // if hover off card5
            this.five.on('pointerout', (pointer) => {
                this.info5.setVisible(false);
            });
        }

        // click content 1
        this.content1.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 1){
                this.page = 1;
                this.pageTurn(this.page);
            }
        });

        // click content 2
        this.content2.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 2){
                this.page = 2;
                this.pageTurn(this.page);
            }
        });

        // click content 3
        this.content3.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 3){
                this.page = 3;
                this.pageTurn(this.page);
            }
        });

        // click content 4
        this.content4.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 4){
                this.page = 4;
                this.pageTurn(this.page);
            }
        });

        // click content 5
        this.content5.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 5){
                this.page = 5;
                this.pageTurn(this.page);
            }
        });

        // click content 6
        this.content6.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 6){
                this.page = 6;
                this.pageTurn(this.page);
            }
        });
    }

    pageTurn(page)
    {
        if(page == 1){
            this.one_2.setVisible(false);
            this.two_2.setVisible(false);
            this.three_2.setVisible(false);
            this.four_2.setVisible(false);
            this.page1.setVisible(true);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.v4.setVisible(false);
            this.v5.setVisible(false);
            this.v1.setVisible(false);

        } else if(page == 2){
            if(level > 1){
                this.info1_2 = this.add.image(650, 350, 'info1-2');
                this.info1_2.setVisible(false);
                this.info2_2 = this.add.image(650, 350, 'info2-2');
                this.info2_2.setVisible(false);
                this.info3_2 = this.add.image(650, 350, 'info3-2');
                this.info3_2.setVisible(false);
                this.info4_2 = this.add.image(650, 350, 'info4-2');
                this.info4_2.setVisible(false);
                this.one_2.setVisible(true);
                this.two_2.setVisible(true);
                this.three_2.setVisible(true);
                this.four_2.setVisible(true);
                this.one_2.on('pointerover', (pointer) => {
                    this.info1_2.setVisible(true);
                });
                // if hover off card1
                this.one_2.on('pointerout', (pointer) => {
                    this.info1_2.setVisible(false);
                });
        
                // if hover on card2
                this.two_2.on('pointerover', (pointer) => {
                    this.info2_2.setVisible(true);
                });
                // if hover off card2
                this.two_2.on('pointerout', (pointer) => {
                    this.info2_2.setVisible(false);
                });
        
                // if hover on card3
                this.three_2.on('pointerover', (pointer) => {
                    this.info3_2.setVisible(true);
                });
                // if hover off card3
                this.three_2.on('pointerout', (pointer) => {
                    this.info3_2.setVisible(false);
                });
        
                // if hover on card4
                this.four_2.on('pointerover', (pointer) => {
                    this.info4_2.setVisible(true);
                });
                // if hover off card4
                this.four_2.on('pointerout', (pointer) => {
                    this.info4_2.setVisible(false);
                });

                this.page1.setVisible(false);
                this.page2.setVisible(true);
                this.page3.setVisible(false);
                this.page4.setVisible(false);
                this.page5.setVisible(false);
                this.page6.setVisible(false);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
                this.v1.setVisible(false);
            }
            else{
                this.one_2.setVisible(false);
                this.two_2.setVisible(false);
                this.three_2.setVisible(false);
                this.four_2.setVisible(false);
                this.v5.setVisible(true);
                this.v1.setVisible(false);
            }

        } else if(page == 3){
            if(level > 2){
                this.info1_2 = this.add.image(650, 350, 'info1-3');
                this.info1_2.setVisible(false);
                this.info2_2 = this.add.image(650, 350, 'info2-3');
                this.info2_2.setVisible(false);
                this.info3_2 = this.add.image(650, 350, 'info3-3');
                this.info3_2.setVisible(false);
                this.info4_2 = this.add.image(650, 350, 'info4-3');
                this.info4_2.setVisible(false);
                this.one_2.setVisible(true);
                this.two_2.setVisible(true);
                this.three_2.setVisible(true);
                this.four_2.setVisible(true);

                this.one_2.on('pointerover', (pointer) => {
                    this.info1_2.setVisible(true);
                });
                // if hover off card1
                this.one_2.on('pointerout', (pointer) => {
                    this.info1_2.setVisible(false);
                });
        
                // if hover on card2
                this.two_2.on('pointerover', (pointer) => {
                    this.info2_2.setVisible(true);
                });
                // if hover off card2
                this.two_2.on('pointerout', (pointer) => {
                    this.info2_2.setVisible(false);
                });
        
                // if hover on card3
                this.three_2.on('pointerover', (pointer) => {
                    this.info3_2.setVisible(true);
                });
                // if hover off card3
                this.three_2.on('pointerout', (pointer) => {
                    this.info3_2.setVisible(false);
                });
        
                // if hover on card4
                this.four_2.on('pointerover', (pointer) => {
                    this.info4_2.setVisible(true);
                });
                // if hover off card4
                this.four_2.on('pointerout', (pointer) => {
                    this.info4_2.setVisible(false);
                });
                

                this.page1.setVisible(false);
                this.page2.setVisible(false);
                this.page3.setVisible(true);
                this.page4.setVisible(false);
                this.page5.setVisible(false);
                this.page6.setVisible(false);
                
                this.v4.setVisible(false);
                this.v5.setVisible(false);
                this.v1.setVisible(false);
            }
            else{
                this.one_2.setVisible(false);
                this.two_2.setVisible(false);
                this.three_2.setVisible(false);
                this.four_2.setVisible(false);
                this.v4.setVisible(true);
                this.v1.setVisible(false);
            }

        } else if(page == 4){
            if(level > 3){
                this.info1_2 = this.add.image(650, 350, 'info1-4');
                this.info1_2.setVisible(false);
                this.info2_2 = this.add.image(650, 350, 'info2-4');
                this.info2_2.setVisible(false);
                this.info3_2 = this.add.image(650, 350, 'info3-4');
                this.info3_2.setVisible(false);
                this.info4_2 = this.add.image(650, 350, 'info4-4');
                this.info4_2.setVisible(false);
                this.one_2.setVisible(true);
                this.two_2.setVisible(true);
                this.three_2.setVisible(true);
                this.four_2.setVisible(true);

                this.one_2.on('pointerover', (pointer) => {
                    this.info1_2.setVisible(true);
                });

                this.one_2.on('pointerout', (pointer) => {
                    this.info1_2.setVisible(false);
                });
        
                // if hover on card2
                this.two_2.on('pointerover', (pointer) => {
                    this.info2_2.setVisible(true);
                });
                // if hover off card2
                this.two_2.on('pointerout', (pointer) => {
                    this.info2_2.setVisible(false);
                });
        
                // if hover on card3
                this.three_2.on('pointerover', (pointer) => {
                    this.info3_2.setVisible(true);
                });
                // if hover off card3
                this.three_2.on('pointerout', (pointer) => {
                    this.info3_2.setVisible(false);
                });
        
                // if hover on card4
                this.four_2.on('pointerover', (pointer) => {
                    this.info4_2.setVisible(true);
                });
                // if hover off card4
                this.four_2.on('pointerout', (pointer) => {
                    this.info4_2.setVisible(false);
                });

                this.page1.setVisible(false);
                this.page2.setVisible(false);
                this.page3.setVisible(false);
                this.page4.setVisible(true);
                this.page5.setVisible(false);
                this.page6.setVisible(false);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
                this.v1.setVisible(false);
            }
            else{
                this.one_2.setVisible(false);
                this.two_2.setVisible(false);
                this.three_2.setVisible(false);
                this.four_2.setVisible(false);
                this.v4.setVisible(true);
                this.v1.setVisible(false);
            }

        } else if(page == 5){
            if(level > 4){
                this.info1_2 = this.add.image(650, 350, 'info1-5');
                this.info1_2.setVisible(false);
                this.info2_2 = this.add.image(650, 350, 'info2-5');
                this.info2_2.setVisible(false);
                this.info3_2 = this.add.image(650, 350, 'info3-5');
                this.info3_2.setVisible(false);
                this.info4_2 = this.add.image(650, 350, 'info4-5');
                this.info4_2.setVisible(false);
                this.one_2.setVisible(true);
                this.two_2.setVisible(true);
                this.three_2.setVisible(true);
                this.four_2.setVisible(true);
                this.one_2.on('pointerover', (pointer) => {
                    this.info1_2.setVisible(true);
                });
                this.one_2.on('pointerout', (pointer) => {
                    this.info1_2.setVisible(false);
                });
        
                // if hover on card2
                this.two_2.on('pointerover', (pointer) => {
                    this.info2_2.setVisible(true);
                });
                // if hover off card2
                this.two_2.on('pointerout', (pointer) => {
                    this.info2_2.setVisible(false);
                });
        
                // if hover on card3
                this.three_2.on('pointerover', (pointer) => {
                    this.info3_2.setVisible(true);
                });
                // if hover off card3
                this.three_2.on('pointerout', (pointer) => {
                    this.info3_2.setVisible(false);
                });
        
                // if hover on card4
                this.four_2.on('pointerover', (pointer) => {
                    this.info4_2.setVisible(true);
                });
                // if hover off card4
                this.four_2.on('pointerout', (pointer) => {
                    this.info4_2.setVisible(false);
                });
                this.page1.setVisible(false);
                this.page2.setVisible(false);
                this.page3.setVisible(false);
                this.page4.setVisible(false);
                this.page5.setVisible(true);
                this.page6.setVisible(false);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
                this.v1.setVisible(false);
            }
            else{
                this.one_2.setVisible(false);
                this.two_2.setVisible(false);
                this.three_2.setVisible(false);
                this.four_2.setVisible(false);
                this.v4.setVisible(true);
                this.v1.setVisible(false);
            }
            
        } else if(page == 6){
            if(level > 5){
                this.page1.setVisible(false);
                this.page2.setVisible(false);
                this.page3.setVisible(false);
                this.page4.setVisible(false);
                this.page5.setVisible(false);
                this.page6.setVisible(true);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
            }
            else{
                this.v1.setVisible(true);
            }
        }
    }
}    