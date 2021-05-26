class Inventory extends Phaser.Scene {
    constructor() {
        super("cardBox");
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // page 1
        this.page1 = this.add.sprite(650,350, 'woodbg');
        this.page1.setDisplaySize(1280, 720);
        this.page1.setVisible(false);

        // page 2
        this.page2 = this.add.sprite(650,350, 'set1');
        this.page2.setDisplaySize(1280, 720);
        this.page2.setVisible(false);

        // page 3
        this.page3 = this.add.sprite(650,350, 'set2');
        this.page3.setDisplaySize(1280, 720);
        this.page3.setVisible(false);

        // page 4
        this.page4 = this.add.sprite(650,350, 'set3');
        this.page4.setDisplaySize(1280, 720);
        this.page4.setVisible(false);

        // page 5
        this.page5 = this.add.sprite(650,350, 'set4');
        this.page5.setDisplaySize(1280, 720);
        this.page5.setVisible(false);

        // page 6
        this.page6 = this.add.sprite(650,350, 'set5');
        this.page6.setDisplaySize(1280, 720);
        this.page6.setVisible(false);

        // page 7
        this.page7 = this.add.sprite(650,350, 'end');
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

        // close
        this.closeInven = this.add.sprite(50, 50, 'x');
        this.closeInven.setDisplaySize(50, 50);
        this.closeInven.setVisible(false);
        this.closeInven.setInteractive({
            useHandCursor: true
        });

        // content1
        this.content1 = this.add.sprite(160, 680, 'content1');
        this.content1.setDisplaySize(50, 50);
        this.content1.setVisible(false);
        this.content1.setInteractive({
            useHandCursor: true
        });
        
        // content2
        this.content2 = this.add.sprite(320, 680, 'content2');
        this.content2.setDisplaySize(50, 50);
        this.content2.setVisible(false);
        this.content2.setInteractive({
            useHandCursor: true
        });

        // content3
        this.content3 = this.add.sprite(480, 680, 'content3');
        this.content3.setDisplaySize(50, 50);
        this.content3.setVisible(false);
        this.content3.setInteractive({
            useHandCursor: true
        });

        // content4
        this.content4 = this.add.sprite(640, 680, 'content4');
        this.content4.setDisplaySize(50, 50);
        this.content4.setVisible(false);
        this.content4.setInteractive({
            useHandCursor: true
        });

        // content5
        this.content5 = this.add.sprite(800, 680, 'content5');
        this.content5.setDisplaySize(50, 50);
        this.content5.setVisible(false);
        this.content5.setInteractive({
            useHandCursor: true
        });

        // content6
        this.content6 = this.add.sprite(960, 680, 'content6');
        this.content6.setDisplaySize(50, 50);
        this.content6.setVisible(false);
        this.content6.setInteractive({
            useHandCursor: true
        });

        // content7
        this.content7 = this.add.sprite(1120, 680, 'content7');
        this.content7.setDisplaySize(50, 50);
        this.content7.setVisible(false);
        this.content7.setInteractive({
            useHandCursor: true
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        //god forsaken variables
        this.page = 1;
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // "x" to close inventory
        this.closeInven.on('pointerdown', (pointer) => {
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
        // 7 button
        this.content7.setVisible(true);
        
        // first page
        if (this.page == 1){
            // show page1
            this.page1.setVisible(true);
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

        // click content 7
        this.content7.on('pointerdown', (pointer) => {
            // show page1
            if(this.page != 7){
                this.page = 7;
                this.pageTurn(this.page);
            }
        });
    }

    pageTurn(page)
    {
        if(page == 1){
            this.page1.setVisible(true);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);
            this.v4.setVisible(false);
            this.v5.setVisible(false);

        } else if(page == 2){
            if(level >= 1){
                this.page1.setVisible(false);
                this.page2.setVisible(true);
                this.page3.setVisible(false);
                this.page4.setVisible(false);
                this.page5.setVisible(false);
                this.page6.setVisible(false);
                this.page7.setVisible(false);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
            }
            else{
                this.v5.setVisible(true);
            }

        } else if(page == 3){
            if(level >= 2){
                this.page1.setVisible(false);
                this.page2.setVisible(false);
                this.page3.setVisible(true);
                this.page4.setVisible(false);
                this.page5.setVisible(false);
                this.page6.setVisible(false);
                this.page7.setVisible(false);
                this.v4.setVisible(false);
                this.v5.setVisible(false);
            }
            else{
                this.v4.setVisible(true);
            }

        } else if(page == 4){
            if(level >= 3){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(true);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(false);
            this.v4.setVisible(false);
            this.v5.setVisible(false);
            }
            else{
                this.v4.setVisible(true);
            }

        } else if(page == 5){
            if(level >= 4){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(true);
            this.page6.setVisible(false);
            this.page7.setVisible(false);
            this.v4.setVisible(false);
            this.v5.setVisible(false);
            }
            else{
                this.v4.setVisible(true);
            }
            
        } else if(page == 6){
            if(level >= 5){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(true);
            this.page7.setVisible(false);
            this.v4.setVisible(false);
            this.v5.setVisible(false);
            }
            else{
                this.v4.setVisible(true);
            }
            
        } else if(page == 7){
            if(level >= 6){
            this.page1.setVisible(false);
            this.page2.setVisible(false);
            this.page3.setVisible(false);
            this.page4.setVisible(false);
            this.page5.setVisible(false);
            this.page6.setVisible(false);
            this.page7.setVisible(true);
            this.v4.setVisible(false);
            this.v5.setVisible(false);
            }
            else{
                this.v4.setVisible(true);
            }
        } 
    }
}    