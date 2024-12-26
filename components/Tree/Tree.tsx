import React, { ReactNode, useContext, useEffect, useState } from "react";
import styles from "./../RegNewWork/RegNewWork.module.scss";
import arrowDown from "/public/assets/images/acco_dwn.svg";
import imgIcon from "/public/assets/images/img_icon.svg";
import videoIcon from "/public/assets/images/video_icon.svg";
import audioIcon from "/public/assets/images/audio_icon.svg";
import fileIcon from "/public/assets/images/file_icon.svg";
import arrowRight from "/public/assets/images/acco_rgt.svg";
import itemSelect from "/public/assets/images/check_square.svg";
import Image from "next/image";
import _ from "lodash";
import "crypto";
import WorkAssetsContext from "@/context/CommonContext";
import { IWorkAssetsContextType } from "@/@types/ContextTypes";
import { IAssetGroupDataType } from "@/@types/WorkTypes";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

type Props = {
  assetGroup: IAssetGroupDataType;
  workAssets?: any;
  files?: any[];
  section?: string | null;
  updateAssetIndexTracker?: (assetId: string, assetGroupId: string) => void;
  showAdd?: boolean;
  children?: ReactNode;
  type?: string;
  assetChild?: any;
  isDisabledIndexing?: boolean;
};

type ITreeState = {
  isExpanded: boolean;
  files: any[];
  selectedItem: string | null;
  showIndexPopup: boolean;
};

type IStoreProps = {
  show: boolean;
  itemIndex?: string;
};

const Tree = ({
  assetGroup,
  workAssets,
  updateAssetIndexTracker,
  files,
  showAdd = true,
  children,
  assetChild,
  isDisabledIndexing = false
}: Props) => {
  const workAssetContext = useContext(WorkAssetsContext);
  const { selectedAssetDetails, selectedAssetGroup } = workAssetContext as IWorkAssetsContextType;
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      selectedAssetDetails &&
      selectedAssetDetails.assetId === state.selectedItem
    ) {
      const { files } = state;
      const updatedFile = _.find(
        files,
        (obj) => obj.assetId === state.selectedItem
      );
      updatedFile.assetName = selectedAssetDetails.assetName;
      updatedFile.assetDescription = selectedAssetDetails.assetDescription;
      updatedFile.copyrightRegNumber = selectedAssetDetails.copyrightRegNumber;
      setState({ ...state, files: [...files] });
      workAssetContext?.updateWorkAssetState({
        files: [...files] as any,
      });
    }
  }, [selectedAssetDetails]);

  useEffect(() => {
    if (files && files.length && !state.files.length) {
      setState({ ...state, files: [...files] });
      workAssetContext?.updateWorkAssetState({
        files: [...files] as any,
      });
    }
  }, [files]);

  const isSubset = (baseArray: any[], checkArray: any[]) => {
    const isSubsetArray = _.every(checkArray, (item) =>
      _.includes(baseArray, item)
    );
    return isSubsetArray;
  };

  useEffect(() => {
    if (!state.files.length && assetGroup.files) {
      setState({
        ...state,
        files: [...state.files, ...(assetGroup.files as [])],
      });
      workAssetContext?.updateWorkAssetState({
        files: [...state.files, ...(assetGroup.files as [])] as any,
      });
    }
  }, [assetGroup]);

  useEffect(() => {
    if (Array.isArray(workAssets) && !isSubset(state.files, workAssets)) {
      setState({ ...state, files: [...state.files, ...workAssets] });
      workAssetContext?.updateWorkAssetState({
        files: [...state.files, ...workAssets] as any,
      });
    }
  }, [workAssets]);

  const [state, setState] = useState<ITreeState>({
    isExpanded: false,
    files: [],
    selectedItem: null,
    showIndexPopup: false,
  });
  const [store, setStore] = useState<IStoreProps>({
    show: false,
    itemIndex: undefined,
  });
  const [assetUploadModalState, setAssetUploadModalState] = React.useState({
    show: false,
  });



  const handleSelect = (file: any) => {
    setState({ ...state, selectedItem: file.assetId });
    workAssetContext?.updateWorkAssetState({
      selectedItem: file.assetId,
      selectedAssetDetails: {
        ...file,
        type: assetGroup?.type
          ? assetGroup?.type.toLocaleLowerCase()
          : file.type,
      },
    });
  };

  const getFileTypeImage = (file?: any) => {
    if (file) {
      switch (file?.type) {
        case "image":
          return imgIcon;
        case "video":
          return videoIcon;
        case "audio":
          return audioIcon;
        case "text":
          return fileIcon;
      }
    } else {
      switch (assetGroup?.type) {
        case "image":
          return imgIcon;
        case "video":
          return videoIcon;
        case "Audio":
          return audioIcon;
        case "text":
          return fileIcon;
      }
    }
  };

  const handleFileUploadSuccess = (value: any) => {
    setState({ ...state, files: [...state.files, ...value] });
    workAssetContext?.updateWorkAssetState({
      files: [...state.files, ...value] as any,
    });
  };

  const handleAddWorkAsset = () => {
    setAssetUploadModalState((prev) => ({ ...prev, show: true }));
    workAssetContext?.updateWorkAssetState({
      selectedAssetGroup: assetGroup as any,
    });
  };

  const handleIndexComponentHide = () => {
    setStore({ ...store, show: false, itemIndex: undefined });
  };

  const handleIndexAction = (
    action: string,
    data: { assetId: string },
    assetId: any
  ) => {
    if (action === "storeNotIndex") {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/works/copy/asset/${data.assetId}?index=1`;
      axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${session?.user.access}`,
          },
        })
        .then((response) => {
          const result = response.data;
          if (result.success) {
            const { data: resultData } = result;
            toast.success(resultData.message);
            const { files } = state;
            let assetFound = files.find(
              (file) => file.assetId === data.assetId
            );
            assetFound.isDownloading = true;
            setState({ ...state });
          }
        });
    } else if (action === "storeIndex") {
      if (updateAssetIndexTracker) {
        updateAssetIndexTracker(data.assetId, assetGroup?.assetGroupId);
      }
    }
  };

  const AddToIndexing = (assetId: any, file: any) => {
    setStore({ ...store, show: true, itemIndex: file.assetId });
  };

  const HandleExpandOnClick = async () => {
    setState({ ...state, isExpanded: !state.isExpanded });
    if (state.isExpanded) {
      return
    }

    const payload = {
      workId: assetGroup?.subAssetGroupId ? assetChild?.work : assetGroup?.work,
      assetGroupId: assetGroup?.subAssetGroupId ? assetChild?.assetGroupId : assetGroup?.assetGroupId,
      subAssetGroupId: assetGroup?.subAssetGroupId
    }

    if (status === "authenticated") {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/works/asset-group-child`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${(session).user.access
              }`,
          },
        }
      );

      const result: any = response.data;
      if (result?.success) {
        toast.dismiss();

        let grp: any;
        if (selectedAssetGroup) {
          grp = assignChidToGrp(selectedAssetGroup, result?.data)
        } else {
          grp = {
            ...assetGroup,
            ...result?.data
          }
        }
        workAssetContext?.updateWorkAssetState({
          selectedAssetGroup: grp,
        });
      }
    } else {
      toast.dismiss();
    }
  };

  const assignChidToGrp = (updatedGroup: any, newData: any) => {
    if (assetGroup?.parentAssetGroupId && updatedGroup?.assetGroupId == assetGroup?.parentAssetGroupId) {
      const inx = updatedGroup?.children?.findIndex((v: any) => v?.assetGroupId === assetGroup?.assetGroupId);
      if (inx > -1) {
        updatedGroup.children[inx] = {
          ...updatedGroup.children[inx],
          // children: updatedGroup?.children[inx].hasOwnProperty('children') ? [...updatedGroup.children[inx]?.children, ...newData.children] : newData?.children,
          // files: updatedGroup?.children[inx].hasOwnProperty('files') ? [...updatedGroup.children[inx]['files'], ...newData.files] : newData?.files,
          children: newData?.children,
          files: newData?.files,
        }
      }
    } else {
      updatedGroup.children?.forEach((g1: any, index: any) => {
        if ((g1.assetGroupId === assetGroup?.parentAssetGroupId && g1?.children?.length > 0)) {
          const inx = g1?.children?.findIndex((v: any) => v.assetGroupId === assetGroup?.assetGroupId);
          if (inx > -1) {
            updatedGroup.children[index]['children'][inx] = {
              ...updatedGroup?.children[index]['children'][inx],
              // children: [...updatedGroup.children[index]['children'][inx]['children'], ...newData.children],
              // files: updatedGroup?.children[index]['children'][inx]?.hasOwnProperty('files') ? [...updatedGroup?.children[index]['children'][inx]['files'], ...newData?.files] : newData?.files,
              children: newData?.children,
              files: newData?.files,
            }
          }
        } else if ((g1?.subAssetGroupId && updatedGroup?.assetGroupId == assetChild?.assetGroupId && !g1?.children?.length)) {
          if (g1.subAssetGroupId === assetGroup?.subAssetGroupId) {
            updatedGroup.children[index] = {
              ...updatedGroup?.children[index],
              children: [],
              files: newData?.files,
            }
          }
        } else {
          assignChidToGrp(g1, newData)
        }
      });
    }
    return updatedGroup
  }


  return (
    <div className={styles.expand_box}>
      <div className={state.isExpanded ? styles.expand_box_inner : undefined}>
        <div className={styles.main_hd} onClick={() => {
          HandleExpandOnClick()
        }} style={{ cursor: "pointer" }}>
          <span>
            {state.isExpanded ? (
              <Image src={arrowDown} alt="" />
            ) : (
              <Image src={arrowRight} alt="" />
            )}
          </span>
          {`${assetGroup?.name} ${assetGroup?.type ? `(${assetGroup?.type})` : ""
            }`}
          <div className="ml-auto">
            {selectedAssetGroup?.name === assetGroup?.name && (
              <Image className="w-5 h-5" src={itemSelect} alt="selected" />
            )}
          </div>
        </div>
        {state.isExpanded && (
          <>
            <ul className={styles.add_assets}>
              {state.files.length
                ? state.files.map((file, idx) => {
                  return (
                    <li
                      className={styles.asset_listed}
                      key={idx}
                      onClick={() => {
                        handleSelect(file);
                      }}
                    >
                      <div className={styles.asset_listed_img}>
                        <span>
                          <Image src={getFileTypeImage(file)} alt="" />
                        </span>{" "}
                        {file.fileName ?? file.url}
                      </div>
                      <div className={styles.asset_listed_checkbox}>
                        <span>
                          {workAssetContext?.selectedItem ===
                            file.assetId && (
                              <Image src={itemSelect} alt="selected" />
                            )}
                        </span>
                      </div>
                      {["video", "Video"].includes(assetGroup?.type) && (
                        <button
                          disabled={isDisabledIndexing}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            AddToIndexing("storeIndex", { assetId: file.assetId });
                          }}
                          className={styles.add_btn}
                        >
                          Index
                        </button>
                      )}
                    </li>
                  );
                })
                : null}
            </ul>
            {assetGroup?.children &&
              assetGroup.children.map((item, idx) => (
                <Tree
                  assetGroup={item}
                  files={item.files}
                  key={idx}
                  showAdd={false}
                  assetChild={assetGroup}
                />
              ))}
            {children}

            {showAdd && (
              <div className={styles.tree_button_outer}>
                <div>
                  <button
                    className={styles.primary_btn}
                    onClick={handleAddWorkAsset}
                  >
                    Add
                  </button>
                </div>
                <div className={styles.tree_bt_right}>

                </div>
              </div>
            )}
            {/* <AssetListModal
              showModal={assetUploadModalState.show}
              handleHide={() =>
                setAssetUploadModalState((prev) => ({ ...prev, show: false }))
              }
              onSuccess={handleFileUploadSuccess}
              fileType={assetGroup?.type}
            />
            <IndexModal
              showModal={store.show}
              handleHide={handleIndexComponentHide}
              indexItem={store.itemIndex}
              onSuccess={handleIndexAction}
            /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Tree;
