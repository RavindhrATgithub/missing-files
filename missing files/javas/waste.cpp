#include<iostream>
using namespace std;
int main(){

int n;
int *p;
cin>>n; cout<<endl;
int small;
p=new int[n];
cin>>p[0];
cout<<endl;
small=p[0];
for(int i=1;i<n;i++)
{
    cin>>p[i];
    if(p[i]<small)
    small=p[i];
    cout<<endl;    
}
cout<<small;


}