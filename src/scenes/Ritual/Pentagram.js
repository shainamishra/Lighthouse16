class Pentagram extends Phaser.Scene {
    constructor() {
        super("ritualPentagram");
    }

    preload(){
        // images
        this.load.image('pentagram', './assets/puzzle5/pentagram/ritual_closeup.png');
        this.load.image('candlesPent', './assets/puzzle5/pentagram/ritual_closeup_candles.png');
        this.load.image('firePentNormal', './assets/puzzle5/pentagram/ritual_closeup_normal.png');
        this.load.image('firePentGreen', './assets/puzzle5/pentagram/ritual_closeup_green.png');
        this.load.image('firePentPurple', './assets/puzzle5/pentagram/ritual_closeup_purple.png');
        this.load.image('firePentYellow', './assets/puzzle5/pentagram/ritual_closeup_yellow.png');
        this.load.image('redVig', './assets/puzzle5/overlays/redVignette.png');
        this.load.image('dead', './assets/puzzle5/overlays/dead.png');

        // cards
        this.load.image('card1', './assets/puzzle5/pentagram/ritual_card1.png');
        this.load.image('card2', './assets/puzzle5/pentagram/ritual_card2.png');
        this.load.image('card3', './assets/puzzle5/pentagram/ritual_card3.png');
        this.load.image('card4', './assets/puzzle5/pentagram/ritual_card4.png');
        this.load.image('card5', './assets/puzzle5/pentagram/ritual_card5.png');

        // items
        this.load.image('pentMatches', './assets/puzzle5/pentagram/ritual items/ritual_closeup_matches.png');
        this.load.image('pentCandles', './assets/puzzle5/pentagram/ritual items/ritual_closeup_candleBox.png');
        this.load.image('pentKnife', './assets/puzzle5/pentagram/ritual items/ritual_closeup_knife.png');
        this.load.image('pentBleach', './assets/puzzle5/pentagram/ritual items/ritual_closeup_bleach.png');
        this.load.image('pentFert', './assets/puzzle5/pentagram/ritual items/ritual_closeup_fert.png');
        this.load.image('pentInsect', './assets/puzzle5/pentagram/ritual items/ritual_closeup_insecticide.png');
        this.load.image('pentSalt', './assets/puzzle5/pentagram/ritual items/ritual_closeup_salt.png');

        // audio
        this.load.audio('unlock', './assets/sfx/doorUnlock2.wav');

        // anim
        this.load.spritesheet('BLOOD', './assets/puzzle5/overlays/blood.png', {frameWidth: 311, frameHeight: 433, startFrame: 0, endFrame: 2});
    }

    create() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // place tile sprite
        this.bg = this.add.tileSprite(0, 3, 1280, 720, 'pentagram').setOrigin(0, 0); 

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // sfx
        this.unlock = this.sound.add('unlock', {volume: 0.75});
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // candle + fire
        this.candlesPent = this.add.image(640, 360, 'candlesPent');
        this.candlesPent.setDisplaySize(1280, 720);
        this.candlesPent.setVisible(false);
        // normal
        this.firePentNormal = this.add.image(640, 360, 'firePentNormal');
        this.firePentNormal.setDisplaySize(1280, 720);
        this.firePentNormal.setVisible(false);
        // green
        this.firePentGreen = this.add.image(640, 360, 'firePentGreen');
        this.firePentGreen.setDisplaySize(1280, 720);
        this.firePentGreen.setVisible(false);
        // purple
        this.firePentPurple = this.add.image(640, 360, 'firePentPurple');
        this.firePentPurple.setDisplaySize(1280, 720);
        this.firePentPurple.setVisible(false);
        // yellow
        this.firePentYellow = this.add.image(640, 360, 'firePentYellow');
        this.firePentYellow.setDisplaySize(1280, 720);
        this.firePentYellow.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // cards
        // card5
        this.card5 = this.add.sprite(155, 628, 'card5');
        this.card5.setDisplaySize(170, 96);
        this.card5.setVisible(true);
        this.card5.setInteractive({
            cursor: handPointer
        });
        // card4
        this.card4 = this.add.sprite(155, 628, 'card4');
        this.card4.setDisplaySize(170, 96);
        this.card4.setVisible(true);
        this.card4.setInteractive({
            cursor: handPointer
        });
        // card3
        this.card3 = this.add.sprite(155, 628, 'card3');
        this.card3.setDisplaySize(170, 96);
        this.card3.setVisible(true);
        this.card3.setInteractive({
            cursor: handPointer
        });
        // card2
        this.card2 = this.add.sprite(155, 628, 'card2');
        this.card2.setDisplaySize(170, 96);
        this.card2.setVisible(true);
        this.card2.setInteractive({
            cursor: handPointer
        });
        // card1
        this.card1 = this.add.sprite(155, 628, 'card1');
        this.card1.setDisplaySize(170, 96);
        this.card1.setVisible(true);
        this.card1.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // objects
        // candles
        this.candle = this.add.sprite(150, 150, 'hitbox');
        this.candle.setDisplaySize(250, 150);
        this.candle.setVisible(true);
        this.candle.setInteractive({
            cursor: handPointer
        });
        // pentCandles
        this.pentCandles = this.add.image(640, 400, 'pentCandles');
        this.pentCandles.setDisplaySize(1280, 720);
        this.pentCandles.setVisible(false);

        // matches
        this.matches = this.add.sprite(1150, 360, 'hitbox');
        this.matches.setDisplaySize(70, 150);
        this.matches.setVisible(true);
        this.matches.setInteractive({
            cursor: handPointer
        });
        // pentMatches
        this.pentMatches = this.add.image(640, 360, 'pentMatches');
        this.pentMatches.setDisplaySize(1280, 720);
        this.pentMatches.setVisible(false);

        // knife
        this.knife = this.add.sprite(1150, 580, 'hitbox');
        this.knife.setDisplaySize(70, 220);
        this.knife.setVisible(true);
        this.knife.setInteractive({
            cursor: handPointer
        });
        // pentKnife
        this.pentKnife = this.add.image(640, 360, 'pentKnife');
        this.pentKnife.setDisplaySize(1280, 720);
        this.pentKnife.setVisible(false);

        // chemicals
        this.chem = this.add.sprite(1160, 120, 'hitbox');
        this.chem.setDisplaySize(160, 200);
        this.chem.setVisible(true);
        this.chem.setInteractive({
            cursor: handPointer
        });
        // pentBleach
        this.pentBleach = this.add.image(640, 360, 'pentBleach');
        this.pentBleach.setDisplaySize(1280, 720);
        this.pentBleach.setVisible(false);
        // pentFert
        this.pentFert = this.add.image(640, 360, 'pentFert');
        this.pentFert.setDisplaySize(1280, 720);
        this.pentFert.setVisible(false);
        // pentInsect
        this.pentInsect = this.add.image(640, 360, 'pentInsect');
        this.pentInsect.setDisplaySize(1280, 720);
        this.pentInsect.setVisible(false);
        // pentSalt
        this.pentSalt = this.add.image(640, 360, 'pentSalt');
        this.pentSalt.setDisplaySize(1280, 720);
        this.pentSalt.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // close
        this.closeLook = this.add.sprite(50, 50, 'x');
        this.closeLook.setDisplaySize(50, 50);
        this.closeLook.setVisible(true);
        this.closeLook.setInteractive({
            cursor: handPointer
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // BLOOD
        this.anims.create({
            key: 'BLOOD',
            frames: this.anims.generateFrameNumbers('BLOOD', { start: 0, end: 2, first: 0}),
            frameRate: 1,
            repeat: 0
        });

        // red vig
        this.redVig = this.add.image(640, 360, 'redVig');
        this.redVig.setDisplaySize(1280, 720);
        this.redVig.alpha = 0.50;
        this.redVig.setVisible(false);

        // dead
        this.dead = this.add.image(640, 360, 'dead');
        this.dead.setDisplaySize(1280, 720);
        this.dead.alpha = 0.10;
        this.dead.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dark
        this.dark = this.add.image(640, 360, 'darkRitual');
        this.dark.setDisplaySize(1280, 720);
        this.dark.setVisible(false);

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // god forsaken variables
        this.textTimer = 0;
        this.fireTimer = 0;
        this.cards = [this.card1, this.card2, this.card3, this.card4, this.card5];
        this.correct = [1, 3, 5, 2, 4];
        this.cardStatus = false;
        this.status = [];
        this.order = [];
        this.correctOrder = ["chemical", "matches", "knife"]
        this.chemSet = 0;
        this.val = 0;
        this.int = 1;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // borders
        this.add.rectangle(0, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - 10, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(0, 0, game.config.width, 10, 0x2c2b45).setOrigin(0, 0);
        this.add.rectangle(game.config.width - 10, 0, 10, game.config.height, 0x2c2b45).setOrigin(0, 0);
    }
    
    update() {
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // go back to lookOut
        this.closeLook.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.scene.stop("ritualPentagram");
                this.scene.wake("ritualNorth");
            }
        });

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // dragging
        if(cards == 0){
            this.input.setDraggable(this.card1);
            this.input.setDraggable(this.card2);
            this.input.setDraggable(this.card3);
            this.input.setDraggable(this.card4);
            this.input.setDraggable(this.card5);
        }

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // chem
        this.candle.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.candle.setVisible(false);
                this.pentCandles.setVisible(false);
                this.candlesPent.setVisible(true);
                candles = 2;
            }
        });

        // chem
        this.chem.on('pointerdown', () => {
            if(this.textTimer == 0){
                this.textTimer = 1;
                this.order.push("chemical");
                this.chem.setVisible(false);
                this.pentFert.setVisible(false);
                this.pentInsect.setVisible(false);
                this.pentBleach.setVisible(false);
                this.pentSalt.setVisible(false);
                this.chemSet = 1;
            }
        });

        // matches
        this.matches.on('pointerdown', () => {
            if(this.textTimer == 0 && candles == 2){
                if(this.order[0] == "chemical"){
                    if(chemical == 1){
                        // fertilizer
                        // show chem im, hide others
                        this.firePentPurple.setVisible(true);

                    } else if(chemical == 2){
                        // insecticide
                        // show chem im, hide others
                        this.firePentGreen.setVisible(true);

                    }else if(chemical == 3){
                        // bleach
                        // show chem im, hide others
                        this.firePentNormal.setVisible(true);

                    }else if(chemical == 4){
                        // salt
                        // show chem im, hide others
                        this.firePentYellow.setVisible(true);
                    }
                    lit = 1;
                }
                else{
                    this.firePentNormal.setVisible(true);
                    lit = 2;
                }
                this.textTimer = 1;
                this.order.push("matches");
                console.log(this.order)
                this.matches.setVisible(false);
                this.pentMatches.setVisible(false);
                matches = 2;
            } 
        });
        
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // knife
        this.knife.on('pointerdown', () => {
            if(this.textTimer == 0){
                knifeGot = 2;
                this.textTimer = 1;
                this.bloodTimer = 1;
                this.status = [];
                this.order.push("knife");
                
                console.log(this.order)
                this.knife.setVisible(false);
                this.closeLook.setVisible(true);
                this.pentKnife.setVisible(false);
                
                this.add.sprite(600, 300, 'hitbox').play('BLOOD');
                this.redVig.setVisible(true);

                // check position
                for (var i = 0; i < 5; i++) {
                    this.status.push(this.checkPosition(this.cards[i]));
                }
                
                this.cardStatus = this.checkCorrect(this.status, this.correct, 5);
                this.final = this.checkRitual(this.cardStatus);
                this.closeLook.setVisible(false);
            }
        });

        if(this.final == true && this.cardStatus == true && this.textTimer == 0 && this.bloodTimer == 0 && chemical == 2){
            // hide shit
            this.closeLook.setVisible(false);
            end = 1;
            this.scene.stop("ritualPentagram");
            this.scene.wake("ritualNorth");
        }
        else if ((this.final == false || this.cardStatus == false || chemical != 2) && this.textTimer == 0 && this.bloodTimer == 0) {
            // die
            if(this.val < 100){
                this.int += 1;
                this.val = this.int/200;
                this.dead.alpha = this.val;
                this.dead.setVisible(true);

                if(this.dead.alpha == 1){
                    this.scene.start('endLose');
                }
            }
            else {
                console.log("else")
            }
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // text timers
        if(this.textTimer > 0 && this.textTimer < 100) {
            this.textTimer += 1;
        } 
        else if(this.textTimer >= 100){
            // hide text
            this.textTimer = 0;
        }

        // blood timers
        if(this.bloodTimer > 0 && this.bloodTimer < 200) {
            this.bloodTimer += 1;
        } 
        else if(this.bloodTimer >= 200){
            // hide text
            this.bloodTimer = 0;
        }

        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // end states
        if(lightState == 0){
            // lights are on
            this.dark.setVisible(false);
        } else if(lightState == 1){
            // lights are off 
            this.dark.setVisible(true);
        }

        if(matches == 0){
            this.matches.setVisible(false);
        }
        else if (matches == 1){
            this.pentMatches.setVisible(true);
        }

        if(knifeGot == 0){
            this.knife.setVisible(false);
        }
        else if (knifeGot == 1){
            this.pentKnife.setVisible(true);
        }
        
        if(chemical == 0){
            this.chem.setVisible(false);
        } else if(chemical == 1 && this.chemSet == 0){
            this.chem.setVisible(true);
            this.pentFert.setVisible(true);
        }else if(chemical == 2 && this.chemSet == 0){
            this.chem.setVisible(true);
            this.pentInsect.setVisible(true);
        }else if(chemical == 3 && this.chemSet == 0){
            this.chem.setVisible(true);
            this.pentBleach.setVisible(true);
        }else if(chemical == 4 && this.chemSet == 0){
            this.chem.setVisible(true);
            this.pentSalt.setVisible(true);
        }else if (this.chemSet == 1){
            this.chem.setVisible(false);
            this.pentFert.setVisible(false);
            this.pentInsect.setVisible(false);
            this.pentBleach.setVisible(false);
            this.pentSalt.setVisible(false);
        }

        // show candles
        if(candles == 1){
            this.pentCandles.setVisible(true);
        }
        else if(candles > 1){
            this.candle.setVisible(false);
            this.candlesPent.setVisible(true);
        }

        // stop card drag
        if(cards == 1){
            this.card1.setInteractive({
                useHandCursor: false
            });
            this.card2.setInteractive({
                useHandCursor: false
            });
            this.card3.setInteractive({
                useHandCursor: false
            });
            this.card4.setInteractive({
                useHandCursor: false
            });
            this.card5.setInteractive({
                useHandCursor: false
            });
        }
    }

    checkPosition(card){
        this.posY = card.y;
        this.posX = card.x;

        if (this.posX > 330){
            if (this.posY < 260){
                // 1
                return 1;
            }
            if (this.posY >= 260 && this.posY < 450){
                // 2 or 5
                if (this.posX > 655){
                    return 2;
                }
                else{
                    return 5;
                }
            }
            if (this.posY >= 450){
                // 3 or 4
                if (this.posX > 655){
                    return 3;
                }
                else{
                    return 4;
                }
            }
        }
        return 0;
    }

    checkCorrect(arr1, arr2, val){
        for (var i = 0; i < val; i++) {
            if(arr1[i] != arr2[i]){
                return false;
            }
        }
        return true;
    }

    checkRitual(cardStatus){
        if(cardStatus == true){
            cards = 1;
            //this.unlock.play();
            
            this.card1.input.draggable = false;
            this.card2.input.draggable = false;
            this.card3.input.draggable = false;
            this.card4.input.draggable = false;
            this.card5.input.draggable = false;

            this.checkItemOrder = this.checkCorrect(this.order, this.correctOrder, 3);

            if(this.checkItemOrder == true){
                return true;
            }
            else{
                return false;
            }

        } else {
            return false;
        }
    }
}