var version_js="28/02/2013";

//item_desc.txt
genie[0]="金";
genie[1]="木";
genie[2]="水";
genie[3]="火";
genie[4]="土";

//element.data
genie[5]="太青之灵"; //22181
genie[6]="太殷之灵"; //23752
genie[7]="太白之灵"; //23753
genie[8]="太玄之灵"; //23754

function affiche2(){
//info skill - partie fixe (nom + description)
  switch (skill) {
    case 9581 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>治愈　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />每一个精灵都会的基础技能，<br />利用五行的原力为自己止血，<br />有"+genie[skill][3][lvl]+"%几率解除自身当前的流血状态。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量增加1%成功几率。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷增加1%成功几率。</span>";
    break;
    case 9591 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>神水罩　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />利用水之力保护自身。<br />在"+genie[skill][3][lvl]+"秒内免疫水系伤害技能和水防降低的效果。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷使用技能所消耗的能量减少1点。</span>";
    break;
    case 9601 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>凝血咒　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />用法术凝固自身的血液，<br />"+genie[skill][3][lvl]+"秒内免疫流血效果。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷使用技能所消耗的能量减少1点。</span>";
    break;
    case 9611 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>引雷诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />引导金元素以落雷的方式攻击目标，对其造成"+genie[skill][5][lvl]+"的金系伤害。<br />并可能打断目标施法。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成3.1点金系伤害。<br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷增加打断几率1%。</span>";
    break;
    case 9621 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>大风咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在飞行状态下吟唱风的咒语，<br />对周围敌人造成"+genie[skill][5][lvl]+"的物理伤害。<br />同时降低所有目标5%的飞行速度，持续"+genie[skill][6][lvl]+"秒。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加10.2的物理伤害。<br /></span><span style='color:#ffa083'>力量:每5点精灵力量增加1%的飞行速度降低效果。<br /><br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 9631 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>回风诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在空中利用风的能量保护自己。<br />8秒内减免伤害"+genie[skill][5][lvl]+"%，<br />并且提升10%的攻击速度和装备闪避率。<br /><br /></span><span style='color:#72fe00'>敏捷:每8点精灵敏捷增加减免伤害效果1%。<br /></span><span style='color:#72fe00'>敏捷:每50点精灵敏捷增加1秒持续时间。<br /><br /></span><span style='color:#ff0000'>只能在空中和地面使用。</span>";
    break;
    case 9641 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>气缚诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"<br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>武侠法师无法使用<br /><br />使目标被定身5秒，同时有几率封印目标3秒。<br />代价是自身有"+genie[skill][5][lvl]+"%的几率定身4秒。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量封印目标的几率提升1%。<br /></span><span style='color:#ffa083'>力量:每100点精灵力量封印对方的效果时间延长1秒。<br /><br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 9651 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>避金诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />提高自身五行中金元素的力量。<br />在"+genie[skill][3][lvl]+"秒内免疫金系伤害和金防降低的效果。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷使用技能所消耗的能量减少1点。</span>";
    break;
    case 9661 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>奔雷击　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>妖精无法使用<br /><br />对目标发射一个蕴含雷电的能量球进行攻击。<br />在特定条件下具有巨大的杀伤力。<br />对目标造成"+genie[skill][5][lvl]+"的金伤害。<br />是否击中与人物命中率有关。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量多造成7.2点金系伤害。<br /><br /></span><span style='color:#d618e7'>对空中目标3倍伤害。<br /></span><span style='color:#d618e7'>对近身目标伤害加倍。<br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 9671 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>电舞　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤数只雷鸟对目标及其周围12米范围内的敌人进行攻击，<br />造成"+genie[skill][5][lvl]+"的金系伤害。<br />并且有20%几率使目标眩晕5秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每点精灵敏捷多造成7.2点金系伤害。<br /><br /></span><span style='color:#d618e7'>对地面目标3倍伤害。<br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 9681 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>醒神诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />对自身注入大量的金元素，<br />令自己"+genie[skill][3][lvl]+"秒内睡眠免疫。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量施放该技能所消耗的能量减少1点<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷施放该技能所消耗的能量减少1点</span>";
    break;
    case 9691 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>无常蛊　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />对目标释放毒虫，<br />造成下3种中的1种随机毒，<br />持续减少生命值"+genie[skill][4][lvl]+"；<br />持续减少真气值"+genie[skill][5][lvl]+"<br />持续减少元气值"+genie[skill][6][lvl]+"；<br />并且略微降低目标移动速度。<br />持续9秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成"+genie[skill][7][lvl]+"点毒伤害。<br /></span><span style='color:#ffa083'>力量:每1点精灵力量多减少目标"+genie[skill][8][lvl]+"点真气值。<br /></span><span style='color:#ffa083'>力量:每1点精灵力量多减少目标1点元气值。</span>";
    break;
    case 9701 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>混元法印　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />利用五行中木的力量，结出混元法印于自身。<br />"+genie[skill][3][lvl]+"秒内对封印状态免疫。<br />(能量大于80才可使用，实际能量消耗受精灵力量影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。</span>";
    break;
    case 9711 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>碎心咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />破坏目标的五行循环，造成目标的防御混乱。<br />使目标物理防御增加"+genie[skill][5][lvl]+"%装备值，<br />五行防御降低"+genie[skill][6][lvl]+"%装备值，<br />同时降低目标的移动速度30%。<br />持续8秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每5点敏捷目标物理防御多增加1%。<br /></span><span style='color:#72fe00'>敏捷:每5点敏捷目标五行防御多减少1%。</span>";
    break;
    case 9721 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>灭魄真诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />令巨大的木系能量聚集于目标身上，<br />使目标"+genie[skill][5][lvl]+"秒内受到的伤害加深20%，<br />可以和天火狂龙等同类的状态叠加。<br /><br /></span><span style='color:#72fe00'>敏捷:每10点精灵敏捷延长伤害加深效果1秒。</span>";
    break;
    case 9731 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>百毒不侵　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />提高自身五行中木元素的力量。<br />使自己在"+genie[skill][3][lvl]+"秒内免疫木系伤害和木系防御降低的效果。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷使用技能所消耗的能量减少1点。</span>";
    break;
    case 9741 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>残神诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />腐蚀目标神智，减少其当前元气总量的5%。<br />同时在3秒内使目标受到"+genie[skill][5][lvl]+"倍减少元气量的毒伤害。<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量增加1%的元气降低效果。</span>";
    break;
    case 9751 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>悲酥印　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />持续侵蚀目标真气。<br />15秒内共减少目标"+genie[skill][5][lvl]+"真气值。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量多减少目标10点真气。</span>";
    break;
    case 9761 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>明王咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>600</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />使自身在3秒内免疫眩晕，<br />但是会有"+genie[skill][4][lvl]+"%几率陷入法术防御降低状态，持续8秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每30点精灵敏捷增加1秒免疫时间。</span>";
    break;
    case 9771 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>神定真言　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />静心宁神，保证自己不受邪魔影响。<br />在"+genie[skill][3][lvl]+"秒内免疫伤害加深类型技能效果。<br />(能量大于80才可使用，实际能量消耗受敏捷影响)<br /><br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷减少使用技能所消耗的能量1点。</span>";
    break;
    case 9781 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>狂暴　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>75</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>520</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />令自身陷入狂暴状态，<br />降低物防和法防，同时增加攻击等级。<br />防御降低越多，攻击等级增加越多。<br />等级"+genie[skill][4][lvl]+"：<br />防御降低"+genie[skill][5][lvl]+"%装备值，<br />攻击等级增加"+genie[skill][6][lvl]+"。<br />效果持续8秒<br />(能量大于75才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每10点精灵力量使用技能所消耗的能量减少1点。</span>";
    break;
    case 9791 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>电闪　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>25</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤强烈的电光闪现，<br />使目标吟唱速度和攻击速度降低"+genie[skill][4][lvl]+"%，<br />持续8秒。<br /><br /></span><span style='color:#ffa083'>力量:每8点精灵力量多降低目标1%的吟唱速度及攻击速度<br /></span><span style='color:#72fe00'>敏捷:每8点精灵敏捷多降低目标1%的吟唱速度及攻击速度<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 9801 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>风啸诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>10米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>85</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />从自身引导旋风带起泥沙袭击目标及其周围的敌人，<br />造成"+genie[skill][4][lvl]+"的土系伤害，<br />降低移动速度"+genie[skill][5][lvl]+"%，持续5秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成15.6点土系伤害。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷降低移动速度的效果提高1%。</span>";
    break;
    case 9811 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>太极　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在脚下召唤太极图，<br />增加范围内己方人物的移动速度和生命恢复速度。<br />移动速度增加"+genie[skill][5][lvl]+"%，持续"+genie[skill][6][lvl]+"秒，<br />生命恢复速度增加50点/秒，持续"+genie[skill][7][lvl]+"秒。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量移动速度增加1%。</span>";
    break;
    case 9821 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>玄沙罩　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>法师专用<br /><br />凝聚土系力量为目标形成护罩，<br />使目标"+genie[skill][4][lvl]+"秒内免疫土系伤害，<br />对队友和自身有效。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷使用技能所消耗的能量减少1点。</span>";
    break;
    case 9831 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>地之击　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][5][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />从目标脚下召唤出大地之手对其进行攻击，<br />给目标造成"+genie[skill][6][lvl]+"的物理伤害，<br />并使其定身2秒。必定命中。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量多造成10点物理伤害。<br /><br /></span><span style='color:#d618e7'>对地面目标3倍伤害。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 9841 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>地恸诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />震动脚下的大地，<br />对周围10米内的敌对目标造成"+genie[skill][5][lvl]+"点土系伤害，并且击退目标，同时有可能中断目标技能，几率每级增加10%。<br /><br /></span><span style='color:#72fe00'>敏捷:每点精灵敏捷增加3.1土系伤害。<br /></span><span style='color:#d618e7'>对近身目标伤害加倍。<br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 9851 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>消魂咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>45</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>武侠妖兽专用<br /><br />吟唱扰乱心神的咒语，同时减少自身和目标元气，<br />每1点力量目标减少"+genie[skill][4][lvl]+"点，自己减少"+genie[skill][5][lvl]+"点。<br /><br /></span><span style='color:#ffa083'>力量:每1点力量多减少目标"+genie[skill][6][lvl]+"点元气。<br /></span><span style='color:#ffa083'>力量:每1点力量多减少自己"+genie[skill][7][lvl]+"点元气。</span>";
    break;
    case 9861 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>紫血冰煞　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>10米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />引导玄冰寒气冰冻目标，<br />有30%几率冻结目标，持续"+genie[skill][3][lvl]+"秒，<br />冻结效果类似昏迷，但不和昏迷效果相冲突。<br /><br /></span><span style='color:#ffa083'>力量:每2点精灵力量增加1%成功率。</span>";
    break;
    case 9871 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>回复波纹.长春　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>羽灵专用<br /><br />在水中以自身为中心制造一个半径15米的扩散波纹，波纹内所有队友持续恢复生命和真气。持续9秒，恢复生命和真气总量的"+genie[skill][5][lvl]+"%。<br /><br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷多回复1%的生命和真气。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 9881 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>噬灵诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />吸取以自身周围15米内敌对目标的生命，并增加自身生命。<br />对范围内目标造成"+genie[skill][5][lvl]+"水系伤害，<br />生命恢复量相当于自身最大生命值1%。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成5.2点水系伤害。<br /></span><span style='color:#72fe00'>敏捷:每10点精灵敏捷增加生命值恢复量1%。<br /><br /></span><span style='color:#d618e7'>对水中目标3倍伤害。</span>";
    break;
    case 9891 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>战斗波纹.湮灭　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>85</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />以自身为中心，在水中扩散出一个半径15米的波纹，<br />波纹内自己同敌对目标水防均下降"+genie[skill][4][lvl]+"%装备值，持续9秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷敌我双方水防下降效果均增加2%。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 9901 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>战斗波纹.命运　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>65</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />用真气带动水元素围绕自身，<br />并扩散出一个半径15米的波纹。<br />对波纹范围内敌对目标造成"+genie[skill][4][lvl]+"的水系伤害，<br />有几率降低目标生命上限4%持续15秒，<br />有几率对目标附加定身效果3秒。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加1%伤害。<br /></span><span style='color:#72fe00'>敏捷:每30点精灵敏捷增加定身时间1秒。<br /><br /></span><span style='color:#d618e7'>对水中目标3倍伤害。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 9911 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>辅助波纹.幸运　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>35</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>200</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在水中制造一个以自身为中心半径15米的扩散波纹，<br />波纹范围内的友军爆击率增加"+genie[skill][3][lvl]+"%，持续5秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每10点精灵敏捷增加持续时间1秒。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 9921 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>水龙吟　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />使用强大的水系力量冲击目标。<br />造成"+genie[skill][5][lvl]+"水系伤害，<br />同时会在10秒内腐蚀目标护甲，使其物理防御降低装备值的5%。<br />腐蚀效果可以和大部分其他降低物防的效果叠加。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量多造成6.7点水系伤害。<br /></span><span style='color:#ffa083'>力量:每10点精灵力量物理防御降低效果增加1%。<br /><br /></span><span style='color:#d618e7'>对近身目标伤害加倍。</span>";
    break;
    case 9931 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>子母雷火咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>40　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />对目标释放一个小火花并持续烧伤对方，造成"+genie[skill][5][lvl]+"火伤害，同时烧伤能附带"+genie[skill][6][lvl]+"%火防御降低效果，持续6秒。<br /><br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷增加6.7火伤害<br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷增加0.7%火防御降低效果</span>";
    break;
    case 9941 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>炎流　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>18米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>全部</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>120　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />消耗全部能量对目标造成巨大的火伤害，每1点能量多造成"+genie[skill][4][lvl]+"点火伤害。</span>";
    break;
    case 9951 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>焚心咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>18米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />对目标造成"+genie[skill][5][lvl]+"点火伤害，并且使目标的攻击速度与吟唱速度均降低"+genie[skill][6][lvl]+"%，持续9秒。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加3.1火伤害，每20点精灵力量增加1%攻击速度与吟唱速度降低效果，每20点精灵力量增加1秒降低效果的持续时间。<br /></span><span style='color:#72fe00'>敏捷:每点精灵敏捷增加3.1火伤害，每20点精灵敏捷增加1%攻击速度与吟唱速度降低效果，每20点精灵敏捷增加1秒降低效果的持续时间。</span>";
    break;
    case 9961 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>阴阳印　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在目标脚下召唤出一个阴阳印阵法，<br />对目标及其周围造成"+genie[skill][5][lvl]+"点火伤害，<br />并使其攻击等级降低5级，持续5秒。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加3.7火系伤害。<br /></span><span style='color:#ffa083'>力量:每10点精灵力量增加降低攻击等级效果持续时间1秒。</span>";
    break;
    case 9971 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>天火咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在目标身上种下天火，<br />目标将受到"+genie[skill][5][lvl]+"的火焰伤害，<br />并且。这个伤害将根据目标的水火防御加成，<br />火防御越高，伤害越低，水防御越高伤害越高。<br />伤害加成和减少不超过10倍。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷增加8点火焰伤害，同时受到护甲计算后的伤害加成影响。</span>";
    break;
    case 9981 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>离火神诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />释放一个火焰新星，对周围目标造成"+genie[skill][5][lvl]+"的火焰伤害，<br />同时造成目标火防降低10%的效果，持续15秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成3.7点火系伤害。<br /></span><span style='color:#72fe00'>敏捷:每10点精灵敏捷增加降低火系防御效果1%。</span>";
    break;
    case 9991 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>天雷破　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤天雷，在目标身上引发雷暴。<br />对目标造成"+genie[skill][5][lvl]+"的金系伤害。<br />土地传导和距离过近都将增强天雷的威力。<br /><br /></span><span style='color:#72fe00'>敏捷:每点精灵敏捷增加2%伤害。<br /><br /></span><span style='color:#d618e7'>对地面目标3倍伤害。<br /></span><span style='color:#d618e7'>对近身目标伤害加倍。</span>";
    break;
    case 10001 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>毒刺　　　　　　　　　　　　　精灵初始技能 ("+genie[5]+")<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][2][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />对目标射出毒刺。<br />使目标移动速度降低"+genie[skill][4][lvl]+"%，持续5秒。<br />使自身移动速度增加"+genie[skill][5][lvl]+"%，持续5秒。<br />元素精灵等级每增加4级，能量消耗降低1点。<br /><br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷，增加1秒减速持续时间。<br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷，增加1秒加速持续时间。</span>";
    break;
    case 10011 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>拙火定　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>300</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>妖兽专用<br /><br />提升施法者的肉体强度和精神力量，<br />为其展开一道防御屏障，吸收"+genie[skill][4][lvl]+"%的法术和物理伤害，持续10秒，降低移动速度50%。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量增加1%的伤害吸收效果。<br /></span><span style='color:#ffa083'>力量:每25点精灵力量增加1秒的伤害吸收效果持续时间。</span>";
    break;
    case 10021 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>泥泞　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在目标脚下幻化出一片沼泽，<br />使目标及其周围15米范围内全体敌人降低"+genie[skill][5][lvl]+"%移动速度和"+genie[skill][6][lvl]+"%物理防御，持续10秒。<br /><br /></span><span style='color:#ffa083'>力量:每10点精灵力量增加1%移动速度降低效果<br /></span><span style='color:#ffa083'>力量:每5点精灵力量增加1%物理防御降低效果</span>";
    break;
    case 10031 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>迷雾　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>35</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在目标周围产生持续4秒的浓雾，<br />降低目标命中"+genie[skill][4][lvl]+"%，<br />同时根据元素精灵的敏捷降低目标的攻击等级5秒，最多降低4级。<br /><br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷持续时间1秒。<br /></span><span style='color:#72fe00'>敏捷:每50点精灵敏捷增加攻击等级降低的效果1点。<br /><br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 10041 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>烈焰刀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>8　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤火焰刀对目标进行攻击，<br />造成"+genie[skill][5][lvl]+"的火系伤害，同时造成"+genie[skill][6][lvl]+"的物理伤害。<br /></span><span style='color:#d618e7'>对近身目标伤害加倍。</span>";
    break;
    case 10051 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>叶舞阵　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>自身<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>40</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />利用大量锐利的冰封之叶保护自己，<br />获得一个增加暴击率2%的BUff，<br />持续"+genie[skill][3][lvl]+"秒。<br />可能与其它提升暴击率的状态效果冲突。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加1秒暴击率提升效果的持续时间。</span>";
    break;
    case 10061 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>守护　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>700</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>无<br /><br />以地水之力催发木灵召唤守护之树。<br />增加自身生命上限"+genie[skill][4][lvl]+"%，<br />持续5秒。<br />同时每3秒回复生命上限的"+genie[skill][5][lvl]+"%的生命,持续6秒。<br />增加的生命上限将影响血符作用效果，请慎重使用。<br /><br /></span><span style='color:#ffa083'>力量:每2点力量多提升生命上限1%。每60点力量延长效果提升的时间1秒。<br /></span><span style='color:#72fe00'>敏捷:每8点精灵敏捷提升3秒回复生命上限效果的1%。</span>";
    break;
    case 10071 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>火魂　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>80</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />"+genie[skill][3][lvl]+"秒内免疫火系伤害。<br />(能量大于80才可使用，实际能量消耗受力敏影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量减少使用技能所消耗的能量1点。<br /></span><span style='color:#72fe00'>敏捷:每5点精灵敏捷减少使用技能所消耗的能量1点。</span>";
    break;
    case 10081 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>火炼真金　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>12米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>法师专用<br /><br />使用真火同时焚烧所有12米范围内的敌对目标，<br />造成"+genie[skill][5][lvl]+"的火伤害，<br />同时对自身和敌人造成"+genie[skill][6][lvl]+"的持续火伤害。<br />持续时间15秒。<br />对队友无效。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加1%伤害。</span>";
    break;
    case 10091 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>雷火术　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤一道副带雷电的磷火攻击目标8米范围内的敌人，<br />造成"+genie[skill][5][lvl]+"的金伤害和"+genie[skill][6][lvl]+"的火伤害，<br />附带降低移动速度"+genie[skill][7][lvl]+"%的效果，持续6秒。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加1%伤害。<br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷增加1秒减速持续时间。</span>";
    break;
    case 10101 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>天剑诀　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>30米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>全部</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />耗尽精灵全部能量在空中凝成巨剑对目标进行攻击，<br />每100点能量造成"+genie[skill][3][lvl]+"点的物理伤害，<br />此技能一定命中。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量造成的伤害多加一倍。</span>";
    break;
    case 10111 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>辅助波纹.毒素　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />以自身为中心制造一个范围15米的毒素波纹，使范围内的所有敌人神经麻痹。<br />效果降低生命上限"+genie[skill][5][lvl]+"%，持续10秒，<br />同时有"+genie[skill][6][lvl]+"%的几率打断施法。<br /><br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷增加降低上限的持续时间1秒。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 10121 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>龙卷诀　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>18米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤龙卷风，对自身前方18米扇型范围内全体目标产生定身效果，持续2秒，<br />之后降低目标移动速度"+genie[skill][5][lvl]+"%，持续10秒，<br />同时产生"+genie[skill][6][lvl]+"点金系伤害。<br /><br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量增加多造成4.3点金系伤害。<br /></span><span style='color:#ffa083'>力量:每5点精灵力量多降低目标移动速度2%。<br /></span><span style='color:#ffa083'>力量:每30点精灵力量降低目标移动速度的效果多持续1秒。</span>";
    break;
    case 10131 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>金刚吼　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />金刚一吼天下醒。<br />"+genie[skill][3][lvl]+"%几率解除自身定身状态。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量增加成功几率1%。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷增加成功几率1%。</span>";
    break;
    case 10141 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>御风诀　　　　　　　　　　　　　精灵初始技能 ("+genie[8]+")<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>90</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>150</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>15　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />让自己短时间内获得驾驭风的能力，<br />空中移动加速50%，<br />持续"+genie[skill][2][lvl]+"秒。<br />元素精灵每提升2级，能量消耗降低1点。<br /><br /></span><span style='color:#72fe00'>敏捷:每10点精灵敏捷增加加速效果1%。<br /></span><span style='color:#72fe00'>敏捷:每40点精灵敏捷增加持续时间1秒。<br /><br /></span><span style='color:#ff0000'>只能在空中使用。</span>";
    break;
    case 10151 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>地火术　　　　　　　　　　　　　精灵初始技能 ("+genie[7]+")<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>100</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>200</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤火柱冲击目标，<br />对目标造成烧焦效果，持续5秒。<br />烧焦：目标攻击、防御降低"+genie[skill][2][lvl]+"%，移动速度增加"+genie[skill][3][lvl]+"%。<br />元素精灵每提升5级，能量消耗降低1点。<br /> <br /></span><span style='color:#72fe00'>敏捷:每40点精灵敏捷增加持续时间1秒。</span>";
    break;
    case 10161 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>气缚咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>5米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /><br />近身封印目标，<br />有"+genie[skill][5][lvl]+"%的几率封印成功，<br />持续4秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷增加1%成功几率。</span>";
    break;
    case 10171 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>大地波纹.死亡　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />制造一个利用大地传导的真气波纹，<br />有"+genie[skill][5][lvl]+"%几率令目标中毒，使之元气持续减少20点。<br />持续60秒，效果不会叠加。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量增加元气持续减少总量1点。<br /></span><span style='color:#ffa083'>力量:每5点精灵力量效果的持续时间减少1秒。<br /><br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10181 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>彩虹祝福　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>30米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>200</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>羽灵专用<br /><br />随机对目标祝福：<br />增加攻击力："+genie[skill][4][lvl]+"%。<br />增加法术攻击力："+genie[skill][5][lvl]+"%。<br />提升爆击率："+genie[skill][6][lvl]+"%。<br />加快吟唱速度："+genie[skill][7][lvl]+"%。<br />持续8秒。<br />提升爆击率的状态不管任何时候放,一定出现。<br />其他祝福效果可能同时出现也可能都不出现，<br />不和同类效果叠加。<br /><br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加出现物理攻击力提升效果的几率1%。<br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加出现法术攻击力提升效果的几率1%。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷增加出现吟唱速度加快效果的几率1%。</span>";
    break;
    case 10191 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>战歌　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>180</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />激昂的战歌，<br />显著提升自身战斗能力。<br />增加自身的攻击速度5%，<br />移动速度5%，<br />以及技能吟唱速度5%。<br />持续"+genie[skill][4][lvl]+"秒。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量增加攻击速度提升效果1%。<br /></span><span style='color:#ffa083'>力量:每4点精灵力量增加移动速度提升效果1%。<br /></span><span style='color:#72fe00'>敏捷:每15点精灵敏捷增加吟唱速度加快效果1%。</span>";
    break;
    case 10201 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>大地波纹.愤怒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>120</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>妖兽专用<br /><br />释放一道通过大地传导的波纹，<br />使周围"+genie[skill][4][lvl]+"米内队友每次受到攻击后元气增加，<br />持续5秒。<br />每次受到攻击回复3点元气。<br /><br /></span><span style='color:#ffa083'>力量:每4点精灵力量效果持续时间增加1秒。<br /></span><span style='color:#72fe00'>敏捷:每70点精灵敏捷增加每次受攻击得到的元气1点。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10211 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>困缚　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>6米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>400</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>羽芒专用<br /><br />束缚近身的目标，<br />令目标定身"+genie[skill][3][lvl]+"秒，<br />同时自身有一定几率免疫减速和昏迷效果5秒，成功率与精灵敏捷有关。<br /><br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷增加免疫减速和昏迷效果出现的几率1%。</span>";
    break;
    case 10221 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>神行真言　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>10米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>75</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>400</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />"+genie[skill][3][lvl]+"秒中自身移动速度增加到极限。<br /><br /></span><span style='color:#72fe00'>敏捷:每100点精灵敏捷增加持续时间1秒。</span>";
    break;
    case 10231 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>肉搏者之怒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>全部</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>武侠妖兽专用<br /><br />在近身时对目标释放自己的愤怒。<br />消耗全部能量，<br />对目标造成大量伤害，同时有几率为自身增加一个吸收法术伤害的护盾。<br />造成"+genie[skill][4][lvl]+"，再附加消耗的能量值的20倍的伤害。<br />有"+genie[skill][5][lvl]+"%的几率激发护盾。<br />护盾最多吸收"+genie[skill][6][lvl]+"点法术伤害，持续8秒。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量增加0.8%伤害。<br /></span><span style='color:#ffa083'>力量:每1点精灵力量护盾多吸收10点法术伤害。<br /></span><span style='color:#ffa083'>力量:每24点精灵力量护盾的持续时间延长1秒。<br /><br /></span><span style='color:#d618e7'>对空中目标3倍伤害。</span>";
    break;
    case 10241 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>金刚拳　　　　　　　　　　　　　精灵初始技能 ("+genie[6]+")<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>100</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>200</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>12　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />凝聚真气成为无形之拳，<br />击破目标的法术防御。<br />五行防御降低30%装备值，<br />10%几率驱散目标身上的正面状态。<br />持续4秒，<br />一定命中。<br />元素精灵每提升5级，能量消耗降低1点。</span>";
    break;
    case 10251 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>风怒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>12米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />召唤旋风对前方扇型区域内的目标进行攻击。<br />造成金系和物理伤害共"+genie[skill][5][lvl]+"，<br />并击退非玩家目标8米。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量增加1%伤害。</span>";
    break;
    case 10261 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>破法经　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>75</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />有"+genie[skill][3][lvl]+"%几率解除自身当前封印状态。<br /><br /></span><span style='color:#ffa083'>力量:每2点精灵力量增加成功几率1%。</span>";
    break;
    case 10271 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>回光返照　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />治愈自身的伤处，<br />瞬间为自己回复"+genie[skill][5][lvl]+"点生命。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量回复生命的效果总量增加2%。</span>";
    break;
    case 10281 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>神风之触　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>75</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />引导金元素进入自身体内，<br />有"+genie[skill][3][lvl]+"%几率解除自身当前的眩晕状态。<br /><br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加成功几率1%。</span>";
    break;
    case 10291 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>地裂爪　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][5][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />凭空挥出真气撕裂目标和其所在的土地，<br />对直线12米上所有目标造成"+genie[skill][6][lvl]+"点物理伤害。<br />命中与人物命中率有关。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量多造成18.3点物理伤害。<br /><br /></span><span style='color:#d618e7'>对地面目标3倍伤害。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10301 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>水火护甲　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>95</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>法师专用<br /><br />融合水与火的不协调力量暂时降低自身受到的伤害。<br />10秒内受到的伤害减少"+genie[skill][4][lvl]+"%，<br />但是之后的10秒内受到的伤害将增加"+genie[skill][5][lvl]+"%。<br /><br /></span><span style='color:#72fe00'>敏捷:每8点精灵敏捷增加前期的伤害减少效果1%。<br /></span><span style='color:#72fe00'>敏捷:每8点精灵敏捷降低后期的伤害增加效果1%。</span>";
    break;
    case 10311 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>封印　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>95</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>600</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>法师，武侠无法使用<br /><br />有25%的几率封印目标，<br />封印状态持续"+genie[skill][3][lvl]+"秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加成功几率1%。</span>";
    break;
    case 10321 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>血仇　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>120</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>900</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />挑衅20米范围内的目标，<br />增加大量仇恨，<br />并且在短时间内大量反弹物理伤害。<br />持续1秒，反弹伤害"+genie[skill][3][lvl]+"%。<br /><br /></span><span style='color:#ffa083'>力量:每10点精灵力量增加反弹物理伤害效果时间1秒。</span>";
    break;
    case 10331 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>法师之星　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>108</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>480</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>法师专用<br /><br />融合了水火土三种特性的新型护盾。<br />增加自身生命与真气恢复速度50点每秒，<br />吸收法术伤害1000点。<br />吸收伤害量达到上限或者持续时间终止均消失。<br />持续"+genie[skill][3][lvl]+"秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每16点精灵敏捷延长效果时间1秒。</span>";
    break;
    case 10341 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>潜能激发　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>120</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>999</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />有几率令目标随机免疫以下状态中的一种或几种：<br />封印、睡眠、减速和昏迷，<br />持续"+genie[skill][3][lvl]+"秒。<br />并且一定免疫伤害加深，<br />持续"+genie[skill][4][lvl]+"秒。<br /><br /></span><span style='color:#ffa083'>力量:每2点精灵力量增加免疫封印和睡眠的几率1%。<br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加免疫减速和昏迷的几率1%。</span>";
    break;
    case 10351 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>虚弱咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>6米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>115</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />近距离抽离目标的力量，<br />使目标挥不起武器。<br />攻击速度降低"+genie[skill][3][lvl]+"%。<br />持续5秒。<br /><br /></span><span style='color:#ffa083'>力量:每2点精灵力量增加攻击速度降低效果1%。<br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加攻击速度降低效果1%。</span>";
    break;
    case 10361 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>寒冰领域　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>18米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />向以自身为中心半径18米范围内的水域释放冻气，<br />使范围内目标受到"+genie[skill][5][lvl]+"的伤害，<br />攻击和吟唱速度降低"+genie[skill][6][lvl]+"%，持续3秒，<br />有60%的几率造成目标定身，持续3秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成13.4点水系伤害。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷攻击和吟唱速度的降低效果增加1%。<br /><br /></span><span style='color:#ff0000'>只能在水中使用。</span>";
    break;
    case 10371 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>破魔咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>"+genie[skill][3][lvl]+"米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>1500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />不断减少目标的真气，持续15秒。<br />同时有"+genie[skill][5][lvl]+"%的几率15秒内恢复30%自身真气。<br />效果与元素精灵的等级和敏捷有关。<br /><br /></span><span style='color:#72fe00'>敏捷:随机增加吸收量。<br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷触发回复真气效果的几率提高1%。</span>";
    break;
    case 10381 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>凤舞　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>10　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>羽灵羽芒专用<br /><br />神奇的咒语，召唤一群凤凰在空中乱舞。<br />对自身周围12米内的所有敌人造成"+genie[skill][5][lvl]+"的金系伤害。<br />附加虚弱效果降低攻击等级5级，持续5秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成11.1点金系伤害。<br /></span><span style='color:#72fe00'>敏捷:每20点精灵敏捷增加效果持续时间1秒。</span>";
    break;
    case 10391 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>绝对领域　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>5米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>135</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>999</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>180　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />展开绝对领域，<br />使自己进入无敌状态，持续"+genie[skill][3][lvl]+"秒，<br />并且在之后2秒免疫行动限制状态。</span>";
    break;
    case 10401 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>荆棘之怒　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />在地上召唤大片的荆棘丛林疯狂生长，<br />打断目标15米范围内的所有敌人技能施展并且造成土系和木系伤害共"+genie[skill][5][lvl]+"点.<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成14点木系伤害。<br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成6点土系伤害。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。<br /><br /></span><span style='color:#d618e7'>对地面目标3倍伤害。</span>";
    break;
    case 10411 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>升龙气　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br /><br />召唤飞龙由目标脚下腾起，<br />对目标造成共计"+genie[skill][5][lvl]+"的物理和火系伤害；<br />同时造成惊吓效果，<br />降低目标防御等级"+genie[skill][6][lvl]+"点，持续3秒。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量多造成10点物理伤害。<br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成10点火系伤害。<br /></span><span style='color:#ffa083'>力量:每20点精灵力量增加效果持续时间1秒。<br /><br /></span><span style='color:#d618e7'>对近身目标伤害加倍。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10421 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>元气盗窃　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>15米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>300</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />瞬间减少目标"+genie[skill][4][lvl]+"点元气并为自己增加等量的元气。<br />同时使目标变得愤怒，在之后的30秒内每3秒增加30点元气。<br />只能对敌方使用。<br /><br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷增加自身得到的元气1点。</span>";
    break;
    case 10431 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>冰暴　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>8米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />降低目标以及其周围敌人"+genie[skill][5][lvl]+"%生命上限。<br />持续5秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每16点精灵敏捷生命上限降低的效果增加1%。</span>";
    break;
    case 10441 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>水火符　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>12　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />同时使用兼具水属性和火属性的混合符咒攻击目标。<br />对目标造成水系和火系伤害各"+genie[skill][5][lvl]+"点，<br />并有"+genie[skill][6][lvl]+"%几率回复自己20%的生命。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成4.3点火系伤害和4.3点水系伤害。<br /></span><span style='color:#72fe00'>敏捷:每2点精灵敏捷回复生命的几率提高1%</span>";
    break;
    case 10451 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>乱魂咒　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>160</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>妖精专用<br /><br />使用强力的咒语扰乱对方魂魄，<br />强制目标乾坤互移。<br />成功几率"+genie[skill][4][lvl]+"%。<br />只能对敌人使用。<br /><br /></span><span style='color:#72fe00'>敏捷:每3点精灵敏捷增加1%成功率。</span>";
    break;
    case 10461 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>炎闪　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>8米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />强力的炎闪。<br />令自身8米范围内的敌人受到"+genie[skill][5][lvl]+"点火焰伤害，<br />并有"+genie[skill][6][lvl]+"%几率混乱3秒。<br /><br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成4点火系伤害。<br /></span><span style='color:#72fe00'>敏捷:每4点精灵敏捷触发混乱效果的几率提高1%。<br /></span><span style='color:#72fe00'>敏捷:每50点精灵敏捷效果持续时间延长1秒。<br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10471 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>灵气爆发　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>自身<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />爆发出巨大的能量，<br />使自己增加1点真元，额外增加"+genie[skill][5][lvl]+"点元气。<br /><br /><br /></span><span style='color:#ffa083'>力量:每2点精灵力量多增加1点元气。</span>";
    break;
    case 10481 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>放逐　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>125</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>1　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />放逐目标，<br />使之被封印但是免疫物理伤害，<br />对非敌对目标有效。<br />持续"+genie[skill][4][lvl]+"秒。<br />（此祝福效果为中性祝福，<br />其它玩家可以主动选择是否接受此祝福）<br /><br /></span><span style='color:#72fe00'>敏捷:每40点精灵敏捷增加效果持续时间1秒。</span>";
    break;
    case 10491 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>信念　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>160</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>500</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>所有职业<br /><br />有几率在5秒内自身免疫所有不利状态。<br />每级增加10%几率。<br />(能量160以上才可使用，能量消耗受精灵力量影响)<br /><br /></span><span style='color:#ffa083'>力量:每5点精灵力量使用技能所消耗的能量减少1点。</span>";
    break;
    case 10501 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>空裂爪　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>25米<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>20　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>妖精专用<br /><br />隔空放出撕裂目标的爪形真气。<br />造成物理和金系伤害各"+genie[skill][5][lvl]+"点，<br />同时造成破甲和流血效果，<br />减少目标物理防御20%装备值，持续9秒。<br />流血伤害"+genie[skill][6][lvl]+"点，持续9秒。<br /><br /></span><span style='color:#ffa083'>力量:每1点精灵力量多造成"+genie[skill][7][lvl]+"点流血伤害。<br /></span><span style='color:#ffa083'>力量:每1点精灵力量多造成10点物理伤害。<br /></span><span style='color:#72fe00'>敏捷:每1点精灵敏捷多造成10点金系伤害。<br /><br /></span><span style='color:#d618e7'>对空中目标3倍伤害。<br /><br /></span><span style='color:#ff0000'>只能在地面使用。</span>";
    break;
    case 10511 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>寂灭　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>施放距离　</span><span style='color:#ffffff'>20<br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>"+genie[skill][3][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>"+genie[skill][4][lvl]+"</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>羽芒妖兽专用<br /><br />直接引暴目标体内的能量，<br />造成"+genie[skill][5][lvl]+"物理伤害，<br />有"+genie[skill][6][lvl]+"%的几率附带定身效果，持续3秒。<br />是否击中与人物命中率有关。<br /><br /></span><span style='color:#ffa083'>力量:每点精灵力量多造成3.7物理伤害。<br /></span><span style='color:#72fe00'>敏捷:每40点精灵敏捷增加定身时间1秒。</span>";
    break;
    case 10521 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>倍返　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>70</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>800</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>30　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>武侠妖兽专用<br /><br />短时间内反弹受到的法术伤害，<br />持续2秒，<br />最多反弹"+genie[skill][3][lvl]+"的伤害。<br /><br /></span><span style='color:#ffa083'>力量:每24点精灵力量增加持续时间1秒。</span>";
    break;
    case 10841 :
      document.getElementById('texte').innerHTML="<span style='color:#ffffff'>平衡　　　　　　　　　　　　　等级"+genie[skill][2][lvl]+"<br /><br /></span><span style='color:#ffcb4a'>消耗能量　</span><span style='color:#96f5ff'>108</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>消耗体力　</span><span style='color:#96f5ff'>800</span><span style='color:#ffffff'><br /></span><span style='color:#ffcb4a'>瞬发<br /></span><span style='color:#ffcb4a'>施放间隔　</span><span style='color:#ffffff'>60　</span><span style='color:#ffcb4a'>秒<br /></span><span style='color:#ffcb4a'>职业限制　</span><span style='color:#ffffff'>武侠专用<br /><br />为自身增加一个护盾，<br />如果自身的物理防御高于法术防御(5防平均值)，那么增加一个法术伤害吸收盾；<br />如果自身的法术防御高于物理防御，那么增加一个物理伤害吸收盾；<br />吸收量等于物理/法术防御差值的"+genie[skill][3][lvl]+"。持续6秒。<br />盾破之前，人物免疫眩晕状态。<br /><br /></span><span style='color:#ffa083'>力量:每16点精灵力量增加持续时间1秒。</span>";
    break;
  }
}

function affichenom(){
//info skill - partie volante (nom)
  switch (hideskill) {
    case 9581 :
      document.getElementById('nomskill').innerHTML="治愈";
    break;
    case 9591 :
      document.getElementById('nomskill').innerHTML="神水罩";
    break;
    case 9601 :
      document.getElementById('nomskill').innerHTML="凝血咒";
    break;
    case 9611 :
      document.getElementById('nomskill').innerHTML="引雷诀";
    break;
    case 9621 :
      document.getElementById('nomskill').innerHTML="大风咒";
    break;
    case 9631 :
      document.getElementById('nomskill').innerHTML="回风诀";
    break;
    case 9641 :
      document.getElementById('nomskill').innerHTML="气缚诀";
    break;
    case 9651 :
      document.getElementById('nomskill').innerHTML="避金诀";
    break;
    case 9661 :
      document.getElementById('nomskill').innerHTML="奔雷击";
    break;
    case 9671 :
      document.getElementById('nomskill').innerHTML="电舞";
    break;
    case 9681 :
      document.getElementById('nomskill').innerHTML="醒神诀";
    break;
    case 9691 :
      document.getElementById('nomskill').innerHTML="无常蛊";
    break;
    case 9701 :
      document.getElementById('nomskill').innerHTML="混元法印";
    break;
    case 9711 :
      document.getElementById('nomskill').innerHTML="碎心咒";
    break;
    case 9721 :
      document.getElementById('nomskill').innerHTML="灭魄真诀";
    break;
    case 9731 :
      document.getElementById('nomskill').innerHTML="百毒不侵";
    break;
    case 9741 :
      document.getElementById('nomskill').innerHTML="残神诀";
    break;
    case 9751 :
      document.getElementById('nomskill').innerHTML="悲酥印";
    break;
    case 9761 :
      document.getElementById('nomskill').innerHTML="明王咒";
    break;
    case 9771 :
      document.getElementById('nomskill').innerHTML="神定真言";
    break;
    case 9781 :
      document.getElementById('nomskill').innerHTML="狂暴";
    break;
    case 9791 :
      document.getElementById('nomskill').innerHTML="电闪";
    break;
    case 9801 :
      document.getElementById('nomskill').innerHTML="风啸诀";
    break;
    case 9811 :
      document.getElementById('nomskill').innerHTML="太极";
    break;
    case 9821 :
      document.getElementById('nomskill').innerHTML="玄沙罩";
    break;
    case 9831 :
      document.getElementById('nomskill').innerHTML="地之击";
    break;
    case 9841 :
      document.getElementById('nomskill').innerHTML="地恸诀";
    break;
    case 9851 :
      document.getElementById('nomskill').innerHTML="消魂咒";
    break;
    case 9861 :
      document.getElementById('nomskill').innerHTML="紫血冰煞";
    break;
    case 9871 :
      document.getElementById('nomskill').innerHTML="回复波纹.长春";
    break;
    case 9881 :
      document.getElementById('nomskill').innerHTML="噬灵诀";
    break;
    case 9891 :
      document.getElementById('nomskill').innerHTML="战斗波纹.湮灭";
    break;
    case 9901 :
      document.getElementById('nomskill').innerHTML="战斗波纹.命运";
    break;
    case 9911 :
      document.getElementById('nomskill').innerHTML="辅助波纹.幸运";
    break;
    case 9921 :
      document.getElementById('nomskill').innerHTML="水龙吟";
    break;
    case 9931 :
      document.getElementById('nomskill').innerHTML="子母雷火咒";
    break;
    case 9941 :
      document.getElementById('nomskill').innerHTML="炎流";
    break;
    case 9951 :
      document.getElementById('nomskill').innerHTML="焚心咒";
    break;
    case 9961 :
      document.getElementById('nomskill').innerHTML="阴阳印";
    break;
    case 9971 :
      document.getElementById('nomskill').innerHTML="天火咒";
    break;
    case 9981 :
      document.getElementById('nomskill').innerHTML="离火神诀";
    break;
    case 9991 :
      document.getElementById('nomskill').innerHTML="天雷破";
    break;
    case 10001 :
      document.getElementById('nomskill').innerHTML="毒刺";
    break;
    case 10011 :
      document.getElementById('nomskill').innerHTML="拙火定";
    break;
    case 10021 :
      document.getElementById('nomskill').innerHTML="泥泞";
    break;
    case 10031 :
      document.getElementById('nomskill').innerHTML="迷雾";
    break;
    case 10041 :
      document.getElementById('nomskill').innerHTML="烈焰刀";
    break;
    case 10051 :
      document.getElementById('nomskill').innerHTML="叶舞阵";
    break;
    case 10061 :
      document.getElementById('nomskill').innerHTML="守护";
    break;
    case 10071 :
      document.getElementById('nomskill').innerHTML="火魂";
    break;
    case 10081 :
      document.getElementById('nomskill').innerHTML="火炼真金";
    break;
    case 10091 :
      document.getElementById('nomskill').innerHTML="雷火术";
    break;
    case 10101 :
      document.getElementById('nomskill').innerHTML="天剑诀";
    break;
    case 10111 :
      document.getElementById('nomskill').innerHTML="辅助波纹.毒素";
    break;
    case 10121 :
      document.getElementById('nomskill').innerHTML="龙卷诀";
    break;
    case 10131 :
      document.getElementById('nomskill').innerHTML="金刚吼";
    break;
    case 10141 :
      document.getElementById('nomskill').innerHTML="御风诀";
    break;
    case 10151 :
      document.getElementById('nomskill').innerHTML="地火术";
    break;
    case 10161 :
      document.getElementById('nomskill').innerHTML="气缚咒";
    break;
    case 10171 :
      document.getElementById('nomskill').innerHTML="大地波纹.死亡";
    break;
    case 10181 :
      document.getElementById('nomskill').innerHTML="彩虹祝福";
    break;
    case 10191 :
      document.getElementById('nomskill').innerHTML="战歌";
    break;
    case 10201 :
      document.getElementById('nomskill').innerHTML="大地波纹.愤怒";
    break;
    case 10211 :
      document.getElementById('nomskill').innerHTML="困缚";
    break;
    case 10221 :
      document.getElementById('nomskill').innerHTML="神行真言";
    break;
    case 10231 :
      document.getElementById('nomskill').innerHTML="肉搏者之怒";
    break;
    case 10241 :
      document.getElementById('nomskill').innerHTML="金刚拳";
    break;
    case 10251 :
      document.getElementById('nomskill').innerHTML="风怒";
    break;
    case 10261 :
      document.getElementById('nomskill').innerHTML="破法经";
    break;
    case 10271 :
      document.getElementById('nomskill').innerHTML="回光返照";
    break;
    case 10281 :
      document.getElementById('nomskill').innerHTML="神风之触";
    break;
    case 10291 :
      document.getElementById('nomskill').innerHTML="地裂爪";
    break;
    case 10301 :
      document.getElementById('nomskill').innerHTML="水火护甲";
    break;
    case 10311 :
      document.getElementById('nomskill').innerHTML="封印";
    break;
    case 10321 :
      document.getElementById('nomskill').innerHTML="血仇";
    break;
    case 10331 :
      document.getElementById('nomskill').innerHTML="法师之星";
    break;
    case 10341 :
      document.getElementById('nomskill').innerHTML="潜能激发";
    break;
    case 10351 :
      document.getElementById('nomskill').innerHTML="虚弱咒";
    break;
    case 10361 :
      document.getElementById('nomskill').innerHTML="寒冰领域";
    break;
    case 10371 :
      document.getElementById('nomskill').innerHTML="破魔咒";
    break;
    case 10381 :
      document.getElementById('nomskill').innerHTML="凤舞";
    break;
    case 10391 :
      document.getElementById('nomskill').innerHTML="绝对领域";
    break;
    case 10401 :
      document.getElementById('nomskill').innerHTML="荆棘之怒";
    break;
    case 10411 :
      document.getElementById('nomskill').innerHTML="升龙气";
    break;
    case 10421 :
      document.getElementById('nomskill').innerHTML="元气盗窃";
    break;
    case 10431 :
      document.getElementById('nomskill').innerHTML="冰暴";
    break;
    case 10441 :
      document.getElementById('nomskill').innerHTML="水火符";
    break;
    case 10451 :
      document.getElementById('nomskill').innerHTML="乱魂咒";
    break;
    case 10461 :
      document.getElementById('nomskill').innerHTML="炎闪";
    break;
    case 10471 :
      document.getElementById('nomskill').innerHTML="灵气爆发";
    break;
    case 10481 :
      document.getElementById('nomskill').innerHTML="放逐";
    break;
    case 10491 :
      document.getElementById('nomskill').innerHTML="信念";
    break;
    case 10501 :
      document.getElementById('nomskill').innerHTML="空裂爪";
    break;
    case 10511 :
      document.getElementById('nomskill').innerHTML="寂灭";
    break;
    case 10521 :
      document.getElementById('nomskill').innerHTML="倍返";
    break;
    case 10841 :
      document.getElementById('nomskill').innerHTML="平衡";
    break;
    default : document.getElementById('nomskill').innerHTML="";
    document.getElementById('nomskill').style.right="1024px";
    document.getElementById('nomskill').style.bottom="605px";
  }
  if (hideskill != 0)
  {
    document.getElementById('nomskill').style.right=(-5-refmousex)+"px";
    document.getElementById('nomskill').style.bottom=(35-refmousey)+"px";
  }
}
