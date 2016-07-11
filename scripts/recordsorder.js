// For sorting list of objects.

var sortedMasterNameList = masterNameList.sort(listedNameComparator);

for (i=0;i<nonUniqueNames.length;i++){
	var currentName = nonUniqueNames[i];
	for (j=0;j<sortedMasterNameList.length;j++){
    	if (sortedMasterNameList[j][0]==currentName){
        	sortedMasterNameList[j][0]+=" ("
            if (sortedMasterNameList[j][3]==0){
        		sortedMasterNameList[j][0]+=1
            } else {
            	sortedMasterNameList[j][0]+=sortedMasterNameList[j][3]
            }
        	sortedMasterNameList[j][0]+=")"
        }
    }
}
