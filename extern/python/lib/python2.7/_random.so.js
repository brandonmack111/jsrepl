(function(d){function f(c){var b,d=n,e,f;e=c+8;b=B[c+2504]>623?1:6;if(b==1){f=0;a:for(;;)if(b=B[e+4*(f+1)]&2147483647|B[e+4*f]&-2147483648,B[e+4*f]=b>>>0>>>1^B[e+4*(f+397)]^B[h+(b&1)*4],f=b=f+1,!(b<=226))break a;f<=622?(d=4,b=3):(d=4,b=5);a:do if(b==3)for(;;){b=B[e+4*(f+1)]&2147483647|B[(d==3?g:e)+4*f]&-2147483648;B[e+4*f]=b>>>0>>>1^B[e+4*(f+-227)]^B[h+(b&1)*4];f=b=f+1;var g=e;if(b<=622)b=d=3;else{d=3;break a}}while(0);b=B[e]&2147483647|
B[(d==4?e:g)+2492]&-2147483648;B[e+2492]=b>>>0>>>1^B[e+1584]^B[h+(b&1)*4];B[c+2504]=0}f=B[c+2504];b=B[e+4*f];B[c+2504]=f+1;b^=b>>>0>>>11;b^=b<<7&-1658038656;b^=b<<15&-272236544;b^=b>>>0>>>18;return b}function b(c,b){var d,e;e=c+8;B[e]=b;for(d=1;;){B[e+4*d&4294967295]=((B[e+4*(d-1&4294967295)&4294967295]>>>0>>>30^B[e+4*(d-1&4294967295)&4294967295])*1812433253&4294967295)+d&4294967295;B[e+4*d]=B[e+4*d];var f=d+1;d=f;if(!(f<=623))break}B[c+2504]=d}function c(c,d){var e=q;q+=8;t(e,0,8);var f,g=n,h,k,
m,o,r,s,u;u=e+4;var w,v;s=r=o=m=k=0;B[e]=0;f=H_(d,j,0,1,J([e,0,0,0],["%struct.PyObject**",0,0,0],G))==0?1:2;if(f==1)h=0;else if(f==2)if(f=B[e]==0|B[e]==X?3:4,f==3)yW(u),b(c,B[u]),B[X]+=1,h=X;else if(f==4){f=(B[B[B[e]+4]+84]&8388608)!=0?6:5;a:do if(f==5){if((B[B[B[e]+4]+84]&16777216)!=0){f=6;break a}h=p3(B[e]);if(h==-1){f=34;break a}var x=W5(h);r=x;g=8;f=9;break a}while(0);a:do if(f==6){var y=kY(B[e]);r=y;g=6;f=9;break a}while(0);a:do if(f==9){if((g==8?x:y)==0){f=34;break a}u=8;h=0;s=nX(u*4);if(s==
0){f=34;break a}m=W5(-1);if(m==0){f=37;break a}o=vY(32);if(o==0){f=34;break a}for(;;){f=v=pZ(r);if(v==0){f=31;break}if(f==-1){f=34;break a}w=HX(r,m);if(w==0){f=34;break a}v=Z5(w);B[w]-=1;f=B[w]==0?16:17;if(f==16)K[B[B[w+4]+24]](w);f=v==-1?18:19;if(f==18&&TW()!=0){f=34;break a}w=f=JX(r,o);if(f==0){f=34;break a}B[r]-=1;f=B[r]==0?21:22;if(f==21)K[B[B[r+4]+24]](r);r=w;f=h>=u?23:27;if(f==23){f=u<<1;if(f>>>1!=u){f=24;break}s=k0(s,f*4);if(s==0){f=34;break a}u=f}if(h>=u){f=28;break}B[s+4*h]=v;h+=1;f=30}if(f==
31){f=h==0?32:33;f==32&&(B[s+4*h]=0,h+=1);y=s;f=i;u=n;x=k=u=g=i;x=c+8;b(c,19650218);g=1;u=0;k=f=h>=624?h:624;f=f!=0?1:6;b:do if(f==1)for(;;)if(B[x+4*g&4294967295]=(u+B[y+4*u&4294967295]&4294967295)+((B[x+4*(g-1&4294967295)&4294967295]>>>0>>>30^B[x+4*(g-1&4294967295)&4294967295])*1664525&4294967295^B[x+4*g&4294967295])&4294967295,B[x+4*g]=B[x+4*g],g=f=g+1,u+=1,f=f>623?2:3,f==2&&(B[x]=B[x+2492],g=1),f=u>=h?4:5,f==4&&(u=0),k=f=k-1,f!=0)f=1;else break b;while(0);k=623;for(u=6;;){B[x+4*g&4294967295]=((B[x+
4*(g-1&4294967295)&4294967295]>>>0>>>30^B[x+4*(g-1&4294967295)&4294967295])*1566083941&4294967295^B[(u==6?x:z)+4*g&4294967295])-g&4294967295;B[x+4*g]=B[x+4*g];g=z=g+1;f=z>623?8:9;f==8&&(B[x]=B[x+2492],g=1);k=y=k-1;var z=x;if(y!=0)u=9;else break}B[z]=-2147483648;B[X]+=1;k=X;f=34;break a}else if(f==24){oX();f=34;break a}else f==28&&(EW(l),a("Reached an unreachable!"))}while(0);a:do if(f==34){if(m==0)break a;B[m]-=1;if(B[m]!=0)break a;K[B[B[m+4]+24]](m)}while(0);f=o!=0?38:40;a:do if(f==38){B[o]-=1;if(B[o]!=
0)break a;K[B[B[o+4]+24]](o)}while(0);f=r!=0?41:43;a:do if(f==41){B[r]-=1;if(B[r]!=0)break a;K[B[B[r+4]+24]](r)}while(0);FU(s);h=k}q=e;return h}function e(){h=J([0,0,0,0,-1727483681,0,0,0],["i32",0,0,0,"i32",0,0,0],F);j=J([115,101,101,100,0],"i8",F);l=J([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0],"i8",F);J([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0],"i8",F);J([114,97,110,100,111,109,95,115,101,
101,100,0],"i8",F);k=J([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0],"i8",F);m=J([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0],"i8",F);s=J([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0],"i8",F);o=J([105,58,103,101,116,114,97,110,100,98,105,116,115,0],"i8",F);r=J([110,
117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0],"i8",F);u=J([82,97,110,100,111,109,40,41,0],"i8",F);w=J([114,97,110,100,111,109,0],"i8",F);v=J([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,0],"i8",F);x=J([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,
117,114,114,101,110,116,32,116,105,109,101,46,0],"i8",F);y=J([103,101,116,115,116,97,116,101,0],"i8",F);z=J([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0],"i8",F);C=J([115,101,116,115,116,97,116,101,0],"i8",F);E=J([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,
116,111,114,32,115,116,97,116,101,46,0],"i8",F);D=J([106,117,109,112,97,104,101,97,100,0],"i8",F);I=J([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0],"i8",F);A=J([103,101,116,114,97,110,100,98,105,116,115,0],"i8",F);N=J([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,
45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0],"i8",F);O=J([0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,
"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",
0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],F);S=J([82,97,110,100,111,109,40,41,32,45,62,32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0],"i8",F);T=J([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0],"i8",F);R=J([1,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,2508,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,132587,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",
0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,
0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",
0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],F);aa=J([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0],"i8",F);L=J([95,114,97,110,100,111,109,0],"i8",F);V=J([82,97,110,100,111,
109,0],"i8",F);B[O]=w;B[O+4]=d+2;B[O+12]=v;B[O+16]=j;B[O+20]=d+4;B[O+28]=x;B[O+32]=y;B[O+36]=d+6;B[O+44]=z;B[O+48]=C;B[O+52]=d+8;B[O+60]=E;B[O+64]=D;B[O+68]=d+10;B[O+76]=I;B[O+80]=A;B[O+84]=d+12;B[O+92]=N;B[R+12]=T;B[R+72]=d+14;B[R+88]=S;B[R+116]=O;B[R+156]=d+16;B[R+160]=d+18}var g={arguments:[]},h,j,l,k,m,s,o,r,u,w,v,x,y,z,C,E,D,I,A,N,O,S,T,R,aa,L,V;g._init_random=function(){var c,b;c=V6(R)<0?3:1;a:do if(c==1){b=G6(L,0,aa);if(b==0)break a;B[R]+=1;J6(b,V,R)}while(0)};K=K.concat([0,0,function(c){var b;
b=f(c)>>>0>>>5;c=f(c);return CY((b*67108864+(c>>>0>>>6))*1.1102230246251565E-16)},0,c,0,function(c){var b,d=n,e,f;f=QY(625);b=f==0?1:2;a:do if(b==1)e=0;else if(b==2){e=0;d=2;b:for(;;){if(!((d==4?g:0)<=623)){b=6;break b}b=W5(B[c+8+e*4]);if(b==0){b=8;break b}B[f+12+e*4]=b;var g=e+1;e=g;d=4;b=5}b:do if(b==6){b=yY(B[c+2504]);if(b==0)break b;B[f+12+e*4]=b;e=f;break a}while(0);B[f]-=1;b=B[f]==0?9:10;if(b==9)K[B[B[f+4]+24]](f);e=0}while(0);return e},0,function(c,b){var d,e=n,f,g;d=(B[B[b+4]+84]&67108864)==
0?1:2;a:do if(d==1)Z(B[Q],k),f=0;else if(d==2)if(d=G_(b)!=625?3:4,d==3)Z(B[U],m),f=0;else if(d==4){g=0;e=4;b:for(;;){var h=B[b+12+g*4];if(!((e==8?j:0)<=623)){d=10;break b}e=Z5(h);d=e==-1?6:8;if(d==6&&TW()!=0){d=7;break b}B[c+8+g*4]=e;var j=g+1;g=j;e=8;d=9}if(d==10){f=K_(h);d=f==-1?11:13;b:do if(d==11){if(TW()==0){d=13;break b}f=0;break a}while(0);B[c+2504]=f;B[X]+=1;f=X}else d==7&&(f=0)}while(0);return f},0,function(c,b){var d,e=n,f,g,h,j;d=(B[B[b+4]+84]&8388608)==0?1:3;a:do if(d==1){if((B[B[b+4]+
84]&16777216)!=0){d=3;break a}RW(B[Q],s,J([B[B[b+4]+12],0,0,0],["i8*",0,0,0],G));f=0;d=20;break a}while(0);if(d==3){j=c+8;g=623;e=3;a:for(;;){if(!((e==15?h:623)>1)){d=17;break a}e=vY(g);if(e==0){d=5;break a}h=SX(b,e);B[e]-=1;d=B[e]==0?7:8;if(d==7)K[B[B[e+4]+24]](e);if(h==0){d=9;break a}e=MZ(h);B[h]-=1;d=B[h]==0?11:12;if(d==11)K[B[B[h+4]+24]](h);d=e==-1?13:15;if(d==13&&TW()!=0){d=14;break a}d=B[j+4*g];B[j+4*g]=B[j+4*e];B[j+4*e]=d;g=h=g-1;e=15;d=16}if(d==17){for(g=0;;)if(B[j+4*g]=B[j+4*g]+1+g,g=f=g+
1,!(f<=623))break;B[c+2504]=624;B[X]+=1;f=X}else d==5?f=0:d==9?f=0:d==14&&(f=0)}return f},0,function(c,b){var d=q;q+=4;t(d,0,4);var e,g,h,j,k;e=I4(b,o,J([d,0,0,0],["i32*",0,0,0],G))==0?1:2;if(e==1)g=0;else if(e==2)if(e=B[d]<=0?3:4,e==3)Z(B[U],r),g=0;else if(e==4)if(h=(((B[d]-1)/32|0)+1)*4,k=nX(h),e=k==0?5:6,e==5)oX(),g=0;else if(e==6){g=0;e=g<h?7:10;a:do if(e==7)for(;;)if(j=f(c),e=B[d]<=31?8:9,e==8&&(j>>>=32-B[d]),B[k+g]=j&255,B[k+(g+1)]=j>>>8&255,B[k+(g+2)]=j>>>16&255,B[k+(g+3)]=j>>>24&255,g+=4,
B[d]-=32,g<h)e=7;else break a;while(0);e=z5(k,h,1,0);FU(k);g=e}q=d;return g},0,$6,0,function(b,d,e){var f,g;f=b==R?1:3;a:do if(f==1){if(J3(u,e)!=0){f=3;break a}g=0;f=12;break a}while(0);if(f==3)if(b=K[B[b+152]](b,0),f=b==0?4:5,f==4)g=0;else if(f==5)if(d=c(b,d),f=d==0?6:9,f==6){B[b]-=1;f=B[b]==0?7:8;if(f==7)K[B[B[b+4]+24]](b);g=0}else if(f==9){B[d]-=1;f=B[d]==0?10:11;if(f==10)K[B[B[d+4]+24]](d);g=b}return g},0,g7,0]);g.run=e;e();return g});